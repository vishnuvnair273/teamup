  const db = require("../database/db");
  const Sequelize = require('sequelize'); 

  const model = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    entity_type:{
      type: Sequelize.STRING,
      allowNull: true,
    },  
    entity_id :{
      type: Sequelize.STRING,
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

    