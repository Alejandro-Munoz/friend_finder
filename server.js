const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const htmlRoutes = require("./server/htmlRoutes.js");
const apiRoutes = require("./server/apiRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT,()=>{console.log("Server started");});

