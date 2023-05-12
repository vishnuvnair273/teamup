const db = require("../database/db");
const Sequelize = require('sequelize'); 
const model = {

  event_id : {
    type : Sequelize.INTEGER,
    primayKey:true,
    
  },

  event_title: {
    type: Sequelize.STRING,
    allownull:true,
     
  },

  description: {
    type: Sequelize.STRING,
    allownull:true,
  },

  no_of_participants:{
    type : Sequelize.INTEGER,
    allownull:true,
  },


 event_date: {
    type: Sequelize.DATE,
  },

  event_fees:{
    type: Sequelize.INTEGER,
    allownull:true,

  },

  event_rewards:{
    type: Sequelize.INTEGER,
    allownull:true,
  },

}

module.exports = { model }; 

  