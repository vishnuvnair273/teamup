const bodyParser = require("body-parser");
const pool = require("../../config/database");
const database = require("../../database/db")
const model = require("../../models/Definitions")
var http = require('https');
var axios = require('axios')
var querystring = require('querystring');


module.exports = {
    create : async (type,data,callBack) => {
        let def =  model.modelDef[type];
        let record = await def.create(data);
        
       let res = await record.save();
       
    },

    audit : async (operationType,body,entityType,criteria,callBack) => {
        if(model.sensitiveTables.includes(entityType)){
            try{    
                let def =  model.modelDef["audit"];
                data = {
                    id :  Date.now(),
                    json : body,
                    entity_type: entityType,
                    entity_id : body[criteria],
                    operation_type : operationType
                }
                console.log(data);
                let record = await def.create(data).then(obj => {
                    callBack(null,true);
                });
            }catch(err){
                callBack(err)
            }
        }else{
            callBack("This table cannot auditted ",false)
        }
    },

    makeHttpRequest : async (data,url,callBack) => {
        
        try{
            axios.post(url,data).then(res => {
                console.log("success");
                callBack(null,res.data);
            })
        }catch{
            callBack(err,null)
        }
    }
}