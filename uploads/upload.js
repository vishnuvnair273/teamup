const multer =require('multer');
const path = require("path"); 
const storageEngine = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
    cb(null, `${Date.UTC()}--${file.originalname}`);
    },
    });


const checkFileType = function (file, cb) {
const fileTypes = /jpeg|jpg|png|gif|svg/;

const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

const mimeType = fileTypes.test(file.mimetype);

if (mimeType && extName) {
return cb(null, true);
} else {
cb("Error: You can Only Upload Images!!");
}
};

const upload = multer({
    storage: storageEngine,
    limits :{fileSize: 100000000},
    fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
    }
    });
module.exports={upload}