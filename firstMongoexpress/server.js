const express = require('express');
const mongoose = require('mongoose')
const app = express();


require ('dotenv').config();


// Middleware to parse JSON requests
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });


// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});


port = process.env.PORT || 4000;


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
