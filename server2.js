// Imports
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request'); // Ensure request is imported
const moment = require('moment');
const crypto = require('crypto');
require('dotenv').config();

const port = process.env.PORT || 5000;
const hostname = process.env.HOSTNAME || 'localhost';
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static('test'));

// Routes and integration
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/test/index.html');
});

app.get("/access_token", (req, res) => {
  getAccessToken()
    .then((accessToken) => {
      res.send("Your access token is " + accessToken);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Error obtaining access token");
    });
});


const generatePasskey = (consumerKey, consumerSecret, timestamp, paybillNumber) => {
  // Concatenate consumer key, consumer secret, timestamp, and paybill number
  const concatenatedString = consumerKey + consumerSecret + timestamp + paybillNumber;
  
  // Hash the concatenated string using SHA-256
  const hash = crypto.createHash('sha256').update(concatenatedString).digest('hex');
  
  return hash;
};

// Example usage
const consumerKey = process.env.SAFARICOM_CONSUMER_KEY;
const consumerSecret = process.env.SAFARICOM_CONSUMER_SECRET;
const timestamp = moment().format("YYYYMMDDHHmmss"); // Replace with current timestamp in 'YYYYMMDDHHmmss' format
const paybillNumber = process.env.BUSINESS_SHORT_CODE;
const passkey = generatePasskey(consumerKey, consumerSecret, timestamp, paybillNumber);
console.log("Passkey:", passkey);
// STK push init route
app.post("/stkpush", (req, res) => {
  const { phone, amount } = req.body; // Expecting phone and amount in the request body
  getAccessToken()
    .then((accessToken) => {
      const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
      const auth = "Bearer " + accessToken;
      var timestamp = moment().format("YYYYMMDDHHmmss");
      const password = Buffer.from(
        process.env.BUSINESS_SHORT_CODE + passkey + timestamp
      ).toString("base64");

      request(
        {
          url: url,
          method: "POST",
          headers: {
            Authorization: auth,
          },
          json: {
            BusinessShortCode: process.env.BUSINESS_SHORT_CODE,
            Password: password,
            Timestamp: timestamp,
            TransactionType: "CustomerPayBillOnline",
            Amount: amount,
            PartyA: phone,
            PartyB: process.env.BUSINESS_SHORT_CODE,
            PhoneNumber: phone,
            CallBackURL: "https://mydomain.com/path",
            AccountReference: "dj action movies",
            TransactionDesc: "dj action movies",
          },
        },
        function (error, response, body) {
          if (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
          } else {
            console.log("Request successful. Please enter M-Pesa PIN to complete the transaction");
            res.status(200).json(body);
          }
        }
      );
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Failed to get access token' });
    });
});

// Access token function
function getAccessToken() {
  const consumer_key = process.env.SAFARICOM_CONSUMER_KEY;
  const consumer_secret = process.env.SAFARICOM_CONSUMER_SECRET;
  const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  const auth = "Basic " + Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

  return new Promise((resolve, reject) => {
    request(
      {
        url: url,
        headers: {
          Authorization: auth,
        },
      },
      function (error, res, body) {
        if (error) {
          return reject(error);
        }

        console.log("Raw response body:", body); // Log the raw response body

        try {
          if (res.statusCode !== 200) {
            return reject(new Error(`Unexpected status code: ${res.statusCode}`));
          }

          var jsonBody = JSON.parse(body);
          if (jsonBody.access_token) {
            const accessToken = jsonBody.access_token;
            resolve(accessToken);
          } else {
            reject(new Error('Access token not found in response'));
          }
        } catch (parseError) {
          reject(new Error('Failed to parse JSON response'));
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
