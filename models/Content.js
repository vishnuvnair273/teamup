const db = require("../database/db");
const Sequelize = require('sequelize'); 

const model = {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    validate: {
      len: {
        args: [0,20],
        msg: "Min length of the phone number is 10"
      }
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },  
  "description" : {
    type : Sequelize.JSON,
    allowNull : true
  },
  price : {
    type : Sequelize.INTEGER,
    allowNull : false
  },
  "image_links":{
    type : Sequelize.JSON,
    allowNull : false
  },
  isPaid:{
    type : Sequelize.BOOLEAN,
    allowNull : false
  },
  media_type: {
    type: Sequelize.STRING,
    allowNull: true,
  },  
  media_link : {
    type: Sequelize.STRING,
    allowNull: true,  
  },
  targetted_user_type :{
    type: Sequelize.INTEGER,
    allowNull:true,
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

  