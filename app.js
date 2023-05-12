const express = require('express'),
      bodyParser = require('body-parser'),
      // mysql = require('pg-hstore'),
      dbaController = require("./controllers/dba.controller"),
      auth= require("./controllers/auth.controller.js"),
      multer = require('multer'),
      cors= require('cors'),
      {upload}=require("./uploads/upload"),
      teamCreate = require("./team/teamCreate");

const {
        create,
        update,
        find
      } = require("./controllers/dba.controller");
    
 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


require("./database/db")
require("./models/Definitions")
app.use(cors({
    origin : "*",
}));
const PORT = process.env.PORT || 3000;

app.use(express.json())
  app.post("/create/:type", dbaController.create);
  app.post("/update/:type", dbaController.update);
  app.post("/find/:type", dbaController.find);
  app.post("/auth", auth.login);
  app.post("/upload", upload.single("image"), (req, res) => {
    if (req.file) {
    res.send("Single file uploaded successfully");
    } else {
       res.status(400).send("Please upload a valid image");
     } 
    });
  app.post("/register",teamCreate.teamCreate)
  app.post("/members")

app.listen(PORT, () => {
    (`Server listening on port ${PORT}`);
});