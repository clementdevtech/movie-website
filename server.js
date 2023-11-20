const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const { Pool } = require('pg');
const pg = require('pg');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// database section
const pool = new pg.Pool({
  host: '127.0.0.1',
  port: '6393',
  user: 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
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

let initialPath = path.join(__dirname, "front end");

app.use(bodyParser.json());
app.use(express.static(initialPath));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(initialPath, "register.html"));
});

// registration section
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json('Fill in all the fields');
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
      res.status(400).json('Email already exists');
    } else {
      res.status(500).json('Internal server error');
    }
  }
});
// login section
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db('users').where({ email: email }).first();

    if (!user) {
      return res.status(404).json('Email not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
          name: user.name,
        },
        process.env.ACCESS_TOKEN_SECRET
        ,
        { expiresIn: '7d' } // Token expires in 7 days
      );

      res.status(200).json({ token });
      //console.log({ token });
    } else {
      res.status(401).json('Invalid password');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json('Internal server error');
  }
});


// comments section 
// GET comments for a specific movie
app.get('/api/movies/:movieId/comments', async (req, res) => {
  const movieId = req.params.movieId;
  const client = await pool.connect();
  try {
      const result = await client.query('SELECT * FROM movie_comments WHERE movie_id = $1', [movieId]);
      res.json(result.rows);
  } finally {
      client.release();
  }
});

// POST a new comment for a specific movie
app.post('/api/movies/:movieId/comments', async (req, res) => {
  const movieId = req.params.movieId;
  const comment = req.body.comment;
  const client = await pool.connect();
  try {
      const result = await client.query('INSERT INTO movie_comments (movie_id, comment) VALUES ($1, $2) RETURNING *', [movieId, comment]);
      res.json(result.rows[0]);
  } finally {
      client.release();
  }
});
//Reply to a comment for a specific comment

// subscription section

// mpesa integration section


app.listen(3000, () => {
  console.log("Server running on port 3000...");
});