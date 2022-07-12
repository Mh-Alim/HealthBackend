const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorMiddleware = require("./middleware/error");



app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const user = require("./Routes/userRoutes");
app.use("/api/v1",user)


// middleware for errors
app.use(errorMiddleware);


module.exports = app; 