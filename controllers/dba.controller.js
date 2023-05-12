const model = require("../models/Definitions")

function createEntry(req, res) {
    console.log("data connection established")
    const type = req.params.type;
    const body = req.body;
    let def = model.modelDef[type];
  
    if ('id' in body) {
    } else {
        createID(req, res);
        
    }   
    def.create(body)
        .then(user => { 
            audit("create", body, type, "id", (err, results) => {
                if (results) {
                    res.json({
                        'success': 200,
                        'message': "Success",
                        'output': user,
                        'body': body,
                        'audit': true
                    })
                } else {
                    // res.statusCode = 200;
                    res.json({
                        'success': 200,
                        'message': "Success",
                        'output': user,
                        'body': body,
                        'audit': err
                    })
                }
            })
        })
        .catch(err => {
            // res.statusCode = 400;
            try {
                res.send({ 'error: ': err['errors'][0]['message'] })
            } catch {
                res.send({ 'error: ': err })

            }
        })
}

function createID(req,res){
    req.body['id'] = Date.now()
    req.body['id']  = (Math.floor( req.body['id'] / 1000) + model.tableID[req.params.type])*10+ req.body['id'] % 10; 
  }

module.exports = {
    create: (req, res) => {
        createEntry(req, res);
    },
    update: (req, res) => {
      const type = req.params.type;
      const criteria = req.body.criteria;
      const object = req.body.object;
  
      let def = model.modelDef[type];
      var query = { where:criteria };
      def.update(object,query).then(obj => {
       
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
      const criteria = req.body.criteria;
  
      let def = model.modelDef[type];
      var query = {
        where: criteria
      };
      def.findAll(query).then(obj => {
        res.send({
          "status": "success",
          'data': obj
        })
       })
       //.catch(err => {
      //   res.send({ 'error: ': err })
      // })
    }
  }
