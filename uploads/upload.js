const multer =require('multer');
const path = require("path"); 
const storageEngine = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
    }
    });


const upload = multer({
    storage: storageEngine,
    limits :{fileSize: 100000000},
    });
module.exports={upload}