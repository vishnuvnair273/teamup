const db = require("../database/db");
const Sequelize = require('sequelize'); 

const model = {

  team_id : {
    type : Sequelize.INTEGER,
    primaryKey: true
  },

  team_name: {
    type: Sequelize.STRING,
    allownull:false,
    
    
  },

  created_by: {
    type : Sequelize.STRING,
    unique: true,
    allowNull: true,
    
  },

  Is_accepting_more: {
    type: Sequelize.BOOLEAN,
  },

}

module.exports = { model }; 

  