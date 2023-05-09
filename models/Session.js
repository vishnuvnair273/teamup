const db = require("../database/db");
const Sequelize = require('sequelize'); 

const model = {

  id : {
    type : Sequelize.STRING,
    primaryKey: true
  },
 
  tokenId: {
    type : Sequelize.STRING,
    unique: true,
    allowNull: true,
    
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}

module.exports = { model }; 

  