const model = require("../models/Definitions")

const teamMember = model.modelDef['teamMember'];
  
module.exports= {
    teamMember:(req,res)=>
{  body["role_from_to"]={
    "player":{ "from": Date , "to": "Data"},
    "manager": { "from": Date , "to": "Data"}
}
      teamMember.create(body)
},}