const model = require("../models/Definitions"),
      jwt = require('jsonwebtoken'),
      dotenv = require('dotenv');
      dotenv.config();

module.exports ={
  login:async (req, res) => {
    let def = model.modelDef['user'];

    
    def.findOne({
      where: {
       ['phone']: req.body.phone,
       ['password']:req.body.password
      }
    })
    .then(user => {
        if (user) {
          let jwtSecretKey = process.env.JWT_SECRET_KEY;
          let data = {
              time: Date(),
              userId: 12}
          const token = jwt.sign(data, jwtSecretKey);
          
          let session = model.modelDef['session'];
          let userSession={ id: user['id'],tokenId: token  }
          session.create(userSession)
            res.send({'token': token })
        } else {
          res.status(400).json({ error: 'User does not exist' })
        }
      })
  }
}