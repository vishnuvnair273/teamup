const { where } = require('sequelize');
const model = require('../models/Definitions');

function createID(req,res){
    req.body['team_id'] = Date.now()
    req.body['team_id']  = (Math.floor( req.body['team_id'] / 1000) + model.tableID['teamCreate'])*10+ req.body['team_id'] % 10; 
  }


module.exports = {
teamCreate: async (req,res)=>{
    const teamCreate = model.modelDef['teamCreate'],
          session = model.modelDef['session'],
          teamMember = model.modelDef['teamMember']
          body = req.body;
 session.findOne({
        where:{
            ['tokenId']:body.session
        }
    })
    .then(session=>{
        let userId = session['id'];
        if( 'userId' in teamCreate){
            
        }else{
        createID(req,res)
        body['created_by'] = userId;
        body['user_id'] = userId;
        teamCreate.create(body);

        res.send(userId)}
    })
}
}

