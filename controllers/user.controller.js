const { create, getUsers, getUsersById, getUserByUserEmail, updateUser, deleteUser, audit, makeHttpRequest } = require("../services/user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const model = require("../../models/Definitions")
const { sign } = require("jsonwebtoken");
const jwt = require('jsonwebtoken')
const authConfig = require(".auth.controller")
const {Op} = require('sequelize')
const authClient = require("twilio")(authConfig.accountSID, authConfig.authToken)




function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function getOtpFunc(req,res){
  console.log("sending OTP ! ");
  console.log(req.body['phone']);
  authClient
  .verify
  .services(authConfig.serviceID)
  .verifications
  .create({
    to: "+91"+req.body['phone'],
    channel: "sms"
  })
  .then((data) => {
    console.log("otp sent successfully!");
  }).catch(err =>{
    console.log("OTP error");
    console.log(err);
  }
  )
}

function createID(req,res){
  req.body['id'] = Date.now()
  req.body['id']  = (Math.floor( req.body['id'] / 1000)*1000 + model.tableID[req.params.type])*1000+ req.body['id'] % 1000;

}

function createEntry(req,res){
    console.log("hei")
    const type = req.params.type;
    const body = req.body;
    console.log(type);
    // console.log(body)
    let def = model.modelDef[type];
    if('id' in body){
    }else{
      createID(req,res);
    }
    console.log(body['id']);
    if('email' in body){
      if(!validateEmail(body['email'])){
        res.statusCode = 400;
        res.send({
          "error: " : "Please enter the valid email ID"
        })
        return
      }else{
        console.log("email is valid")
      }
    }

    if("phone" in body){
      console.log(body['phone'].toString().length);
      if(body["phone"].toString().length == 10){

      }else{
        res.statusCode = 400;
        res.send({
          "success" : 400,
          "message" : "Enter the valid phone number !!"
        });
        return;
      }
    }

    def.create(body)
      .then(user => {
        if("phone" in body){
          body["phone"] = body["phone"];
          getOtpFunc(req,res);
        }
        audit("create", body, type, "id", (err, results) => {
          if (results) {
            res.json({
              'success': 200,
              'message': "Success",
              'output': user,
              'body' : body,
              'audit': true
            })
          } else {
            // res.statusCode = 200;
            res.json({
              'success': 200,
              'message': "Success",
              'output': user,
              'body' : body,
              'audit': err
            })
          }
        })
      })
      .catch(err => {
        // res.statusCode = 400;
        try{
          res.send({ 'error: ': err['errors'][0]['message'] })
        }catch{
          res.send({ 'error: ': err })     
      
        }
      })
  }

module.exports = {
  findAll : (req,res) => {
    const type = req.params.type;
    console.log("stage 1.2");
    let def = model.modelDef[type];
    def.findAll({
      where: {
        id : {
          [Op.gt] : 0
        }
      }
    }).then(obj => {

      console.log(obj);
      res.send({
        "status": "success",
        'data': obj
      })
    }).catch(err => {
      res.send({ 'error: ': err })
    })
  },

  deleteO: (req, res) => {
    const type = req.params.type;
    const criteria = req.params.criteria;
    let def = model.modelDef[type];
    def.destroy({
      where: {
        [criteria]: req.body[criteria]
      }
    }).then(obj => {
      audit("delete", obj, type, criteria, (err, results) => {
        if (results) {
          res.json({
            "status": "success",
            'data': obj,
            'audit': true
          })
        } else {
          res.json({
            "status": "success",
            'data': obj,
            'audit': err
          })
        }
      })
    }).catch(err => {
      res.send({ 'error: ': err })
    })
  },

  upload : async (req,res) => {
    const type = req.params.type;
    let def = model.modelDef[type];
    const data = req.body;
    createID(req,res);
    console.log(req.body);
    makeHttpRequest(data,"https://lbvvfxiuqb.execute-api.ap-south-1.amazonaws.com/upload",async (err,response) => {
      if(err = null){
        res.statusCode = 400;
        res.send({
          'error' : "Something went wrong"
        })
      }else{
        req.body['presigned_url'] = response["presigned_url"]
        req.body['media_link'] = response['fetch_url']
        console.log(req.body);
        try{

          }catch(error){
            

            }
            createEntry(req,res);
      }
    })
  },

  update: (req, res) => {
    const type = req.params.type;
    const criteria = req.params.criteria;

    let def = model.modelDef[type];
    def.update(req.body, {
      where: {
        [criteria]: req.body[criteria]
      }
    }).then(obj => {
      console.log("stage 1");
      // const jsonData = this.find(req,res,true); 
      console.log("stage 2");
      audit("update", obj, type, criteria, (err, results) => {
        if (results) {
          res.json({
            'message': "Success",
            'data': obj,
            'audit': true
          })
        } else {
          res.json({
            "status": "success",
            'data': obj,
            'audit': err
          })
        }
      })
    }).catch(err => {
      res.send({ 'error: ': err })
    })
  },

  find: (req, res) => {
    const type = req.params.type;
    const criteria = req.params.criteria;
    const body = req.body;

    console.log("stage 1.2");
    let def = model.modelDef[type];
    def.findAll({
      where: {
        [criteria]: req.body[criteria]
      }
    }).then(obj => {

      console.log(obj);
      res.send({
        "status": "success",
        'data': obj
      })
    }).catch(err => {
      res.send({ 'error: ': err })
    })
  },

  create: (req, res) => {
    createEntry(req,res);
  },
  verifyOtp: (req, res) => {
    let phonenumber = req.query.phonenumber;
    const type = req.params.type;
    console.log(phonenumber.slice(2));
    let def = model.modelDef[type];
    var varName = 'phone';
    def.findOne({
      where: {
        [varName]: phonenumber.slice(2)
      }
    })
      .then(user => {
        if (user) {
          authClient
            .verify
            .services(authConfig.serviceID)
            .verificationChecks
            .create({
              to: `+${req.query.phonenumber}`,
              code: req.query.code
            }).then((data) => {
              let token = jwt.sign(user.dataValues, "qwer1234", {
                expiresIn: '365d'
              });
              let tokenBody = {
                "auth_token" : token
              }
              def.update(tokenBody, {
                where: {
                  'phone': phonenumber.slice(2)
                }
              }).then(obj => {
                res.send({
                  'success': 200,
                  'message': "Success",
                  'token': token
                })
              }).catch(err => {
                res.statusCode = 400;
                res.send({ 'error: ': err })
              })
              
            }).catch(err =>
              res.status(400).json({ error: err.message })
            )

        } else {
          res.status(400).json({ error: 'User does not exist' })
        }
      })
      .catch(err => {
        res.status(400).json({ error: err.message })
      })

  },

  getOtp: (req, res) => {
    authClient
    .verify
    .services(authConfig.serviceID)
    .verifications
    .create({
      to: `+${req.query.phonenumber}`,
      channel: "sms"
    })
    .then((data) => {
      res.status(200).send({
        "status code": 200,
        'message': "Success"
      })
    }).catch(err =>
      res.status(400).json({ error: err })
    )
  },

  login: (req, res) => {
    const type = req.params.type;
    console.log(type);
    console.log(req.body.phone);

    let def = model.modelDef[type];
    var varName = 'phone';
    def.findOne({
      where: {
        [varName]: req.body.phone
      }
    })
      .then(user => {
        if (user) {
          if (req.body.otp === "1234") {

          } else {
            res.send({
              'success': 400,
              'message': "invalid email or password",
              'output': []
            })
          }
        } else {
          res.status(400).json({ error: 'User does not exist' })
        }
      })
      .catch(err => {
        res.status(400).json({ error: err.message })
      })
  },
}
