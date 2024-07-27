//..................................imports..............................
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const ngrok = require('ngrok');
const fs = require('fs');
const moment = require('moment');
require('dotenv').config();
//const router = express.Router();
const multer = require('multer');
const MediaInfo = require('mediainfo');


const port = process.env.PORT;
const hostname = 'localhost';
//........................Database connection..........................
const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '6393',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "front end")));
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "front end", "index.html"));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, "front end", "register.html"));
});

const moviesDir = path.join(__dirname, 'movies');
const tempdir = path.join(__dirname, 'temp');
const imagesDir = path.join(__dirname, "Front End", 'images');
//.............................Registration....................................

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Fill in all the fields' });
    }
    const hashedPassword = await bcrypt.hash(password, 13);
    const insertedUser = await db('users')
      .insert({
        name: name,
        email: email,
        password: hashedPassword
      })
      .returning(['name', 'email']);

    res.status(200).json(insertedUser[0]);
  } catch (error) {
    if (error.detail && error.detail.includes('already exists')) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

//..................................................Login section............
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db('users').where({ email: email }).first();

    if (!user) {
      return res.status(404).json({ error: 'Email not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const secretKey = process.env.ACCESS_TOKEN_SECRET;
      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
          name: user.name,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '7d' } // Token expires in 7 days
      );

      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Invalid password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//................................admin page password
app.post('/admin-passwword', async(req,res)=>{
  try{
    const {password,email} = req.body;
    console.log(password);
    console.log(email);
    const user = await db('users').where({ email: email }).first();

    if (!user) {
      return res.status(404).json({ error: 'Email not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid){
      res.status(200).json({message: 'password is correct'})
    }
    else{
      res.status(401).json({ message: 'Incorrect password' });
    }
  } catch(error){
    console.error(error);
  }
})
// .................................................Comments Section

//appending comments from the database for specific movie
app.post('/allcomments', async (req, res) =>{
  try {
    const { movieId }= req.body;
    //console.log(movieId);
    if (!movieId){
      return res.status(400).json({error: 'movieId missing'});
    }else{
      const comments = await db('comments').where({ movieid: movieId });
      //console.log(comments);
      if (!comments) {
        return res.status(404).json({ error: 'comments not found' });
      }else{
        res.status(200).json(comments);
      }
    }
  }catch (error) {
    console.error('Error retriving comments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//appending new comments
app.post('/comments', async (req, res) => {
  try {
    const { comment,movieId } = req.body;
    if (!comment || !movieId ) {
      return res.status(400).json({ error: 'movieId or comment missing' });
    }
    const insertedcomment = await db('comments')
      .insert({
        movieid: movieId,
        comment: comment
      })
      .returning(['id', 'comment']);
      
    res.status(200).json(insertedcomment[0]);
  } catch (error) {

      res.status(500).json({ error: 'Internal server error' });
    
  }
});
// appending replies from the database

app.post('/allreplies', async (req, res) =>{
  try {
    const { movieId }= req.body;
    
    if (!movieId){
      return res.status(400).json({error: 'movieId or commentId missing'});
    }else{
      const replies = await db('replies').where({ movieid: movieId });
      //console.log(replies);
      if (!replies) {
        return res.status(404).json({ error: 'replies not found' });
      }else{
        res.status(200).json( replies );
      }
    }
  }catch (error) {
    console.error('Error retriving replies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//appending new replies
app.post('/replies', async (req, res)=> {
  try {
    const { reply,commentId,movieId } = req.body;
    if (!reply || !commentId || !movieId ) {
      return res.status(400).json({ error: 'reply, movieId or commentId missing' });
    }
    const insertedreply = await db('replies')
      .insert({
        movieid:movieId,
        commentid: commentId,
        reply: reply
      })
      .returning(['commentid', 'reply']);
      
    res.status(200).json(insertedreply[0]);
  } catch (error) {

      res.status(500).json({ error: 'Internal server error' });
    
  }
});
//..............adding movies dynamically...................
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, tempdir);
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Endpoint to upload movie to the temporary directory
app.post('/upload-temp-movie', upload.single('movie'), (req, res) => {
  const tempPath = path.join(tempdir, req.file.filename);
  const moviePath = path.join(moviesDir, req.file.filename);
  // Check if the movie already exists in the final directory
  if (fs.existsSync(moviePath)) {
      // Remove the temp file if the movie already exists
      fs.unlinkSync(tempPath);
      return res.json({ exists: true });
  }

  // If the movie does not exist, respond with the temporary file name
  res.json({ exists: false, tempFileName: req.file.filename });
});

// Endpoint to upload image to the temporary directory
app.post('/upload-temp-image', upload.single('image'), (req, res) => {
  const tempPath = path.join(tempdir, req.file.filename);
  const imagePath = path.join(imagesDir, req.file.filename);

  // Check if the image already exists in the final directory
  if (fs.existsSync(imagePath)) {
      // Remove the temp file if the image already exists
      fs.unlinkSync(tempPath);
      return res.json({ exists: true });
  }

  // If the image does not exist, respond with the temporary file name
  res.json({ exists: false, tempFileName: req.file.filename });
});
 
// Endpoint to get metadata of the uploaded movie
app.post('/get-metadata', (req, res) => {
  const { tempFileName } = req.body;
  const tempPath = path.join(tempdir, tempFileName);

  ffmpeg.ffprobe(tempPath, (err, metadata) => {
      if (err) {
          return res.status(500).json({ error: 'Error extracting metadata' });
      }

      // Extract necessary metadata
      const videoStream = metadata.streams.find(stream => stream.codec_type === 'video');
      if (videoStream) {
          const { width, height, codec_name } = videoStream;
          const duration = metadata.format.duration;
          res.json({
              duration: `${Math.floor(duration / 60)} minutes ${Math.floor(duration % 60)} seconds`,
              width,
              height,
              codec_name,
              size: fs.statSync(tempPath).size
              // Add more metadata if needed
          });
      } else {
          res.status(500).json({ error: 'No video stream found' });
      }
  });
});

// Endpoint to move both files from the temporary directory to the final directories
app.post('/save-files', (req, res) => {
  const {output_image, movie_output} = req.body;
  console.log(output_image);
  const tempImagePath = path.join(tempdir, output_image);
  const imagePath = path.join(imagesDir, output_image);
  const tempMoviePath = path.join(tempdir, movie_output);
  const moviePath = path.join(moviesDir, movie_output);

  // Move the image file from the temporary directory to the final directory
  fs.rename(tempImagePath, imagePath, (err) => {
      if (err) {
        console.log(err + 313);
          return res.status(500).json({ success: false });
      }
      // Move the movie file from the temporary directory to the final directory
      fs.rename(tempMoviePath, moviePath, (err) => {
          if (err) {
            console.log(err + 319);
              return res.status(500).json({ success: false });
          }

              const mediaInfo =  MediaInfo({ format: 'JSON' });
              const file = fs.readFileSync(tempMoviePath,);
              const metadata = mediaInfo.analyzeData(() => file.length, chunkSize => file.slice(0, chunkSize));
      
              const videoStream = metadata.media.track.find(track => track["@type"] === "Video");
              if (videoStream) {
                  const { Width: width, Height: height, CodecID: codec_name, Duration: duration } = videoStream;
                  const fileSize = fs.statSync(tempMoviePath,).size;
      
                  res.json({
                      duration: `${Math.floor(duration / 60)} minutes ${Math.floor(duration % 60)} seconds`,
                      width,
                      height,
                      codec_name,
                      size: fileSize
                  });
              } else {
                console.log(err + 343);
                  res.status(500).json({ success: false });
              }
          });
  });
});
//............................................lipa na mpesa integration..........
app.get("/", (req, res) =>{
  var timestamp = moment().format("YYYYMMDDHHmmss");
  conole.log(timestamp);
});
app.get("/access_token",(req, res) => {
  getAccessToken()
  .then((accessToken) => {
    res.send("Your access token is " + accessToken);
  })
  .catch(console.log);
});


// stk push init route

app.get("/stkpush", (req, res) => {
  try{
    const {phone,amount} = req.body
  } catch (error) {

      res.status(500).json({ error: 'Internal server error' });
    
  }
   getAccessToken()
   .then((accessToken) => {
    const url = 
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    auth = "Bearer" + accessToken;
    var timestamp = moment().format("YYYYMMDDHHmmss");
    const password = new Buffer.from(
      process.env.BUSINESS_SHORT_CODE + process.env.PASS_KEY + timestamp).toString("base64");

    request(
    {
      url: url,
      method: post,
      headers: {
        Authorization: auth,
      },
      json: {
        BusinessShortCode: process.env.BUSINESS_SHORT_CODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PhoneNumber: phone,
        CallBackURL: "",
        AccountReference: "dj action movies",
        TransactionDesc: "payment for dj action movies",
      },

    },
    function (error, response, body) {
      if (error) {
        console.log(error);
      } else{
        console.log("request is successful done. please enter mpesa pin to complete the transaction");
        res.status(200).json(body);
      }
    }
    );

   })
   .catch(console.log);
});


//ACCESS TOKEN FUNCTION
function getAccessToken(){
  const consumer_key = process.env.SAFARICOM_CONSUMER_KEY;
  const consumer_secret = process.env.SAFARICOM_CONSUMER_SECRET;
  const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  const auth = "Basic " + new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");
  return new Promise((response, reject) =>{
    request(
    {
      url: url,
      headers: {
        Authorization: auth,
      },
    },
    function (error, res, body) {
      var jsonBody = JSON.parse(body);
      if (error) {
        reject(error);
      } else {
        const accessToken = jsonBody.access_token;
        response(accessToken);
      }
    }
    );
  });
}

// Server setup
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});