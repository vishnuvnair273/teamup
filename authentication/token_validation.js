const jwt = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      // token = token.slice(7);
      jwt.verify(token, "qwer1234", (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token...",
            "error" : err
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
};