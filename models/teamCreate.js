const db = require("../database/db");
const Sequelize = require ('sequelize');

const model = {

    team_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
      },

    team_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },       
    created_by:{
        type: Sequelize.STRING,
        allowNull: false,
    },       
    is_accepting_more:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
       
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