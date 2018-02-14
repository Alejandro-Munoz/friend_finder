const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const htmlRoutes = require("./htmlRoutes.js");
// const apiRoutes = require("./apiRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// htmlRoutes(app);
// apiRoutes(app);

app.listen(PORT,()=>{console.log("Server started");});

