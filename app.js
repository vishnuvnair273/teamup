const express = require('express'),
      bodyParser = require('body-parser'),
      dbaController = require("./controllers/dba.controller"),
      auth= require("./controllers/auth.controller.js"),
      multer = require('multer'),
      cors= require('cors'),
      {upload}=require("./uploads/upload");

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
  app.post("/auth/:type", auth.login);
  app.post("/single", upload.single("image"), (req, res) => {
    if (req.file) {
    res.send("Single file uploaded successfully");
    } else {
       res.status(400).send("Please upload a valid image");
     } 
    });

app.listen(PORT, () => {
    (`Server listening on port ${PORT}`);
});