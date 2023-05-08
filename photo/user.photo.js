const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'photo/') // specify the destination folder
  },
  filename: function (req, file, cb) {
    const uniqueName = generateUniqueName(file.originalname); // generate a unique name for the file
    cb(null, uniqueName) // save the file with the generated name
  }
});
const upload = multer({ storage: storage });
