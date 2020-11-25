const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());
const router = require("./Routes/index");

// Defining that our view engine is hbs
app.set("view engine", "hbs");

// All the Static files will be included here. For example: css, fonts, js and many more
const filePath = path.join(__dirname, "../static/public");

// This path is for all the views we have in the frontend. For example: Index page, About page and many more
const viewsPath = path.join(__dirname, "views");

// This path is for all the partial view we have in the frontend. For example: Footer, Headers and many more
const partialPath = path.join(__dirname, "partials");

// Setting that our view belongs to viewsPath
app.set("views", viewsPath);

// Register partialPath with hbs
hbs.registerPartials(partialPath);

//Tells the app to use a static file path
app.use(express.static(filePath));

// Handles all the routes
app.use("/", router);

module.exports = app;
