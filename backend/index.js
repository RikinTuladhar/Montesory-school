const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");
const connectdb = require("./config/dbConnection");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

connectdb();
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/enquiry", require("./routes/enquiryRoutes"));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
