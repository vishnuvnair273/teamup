const db = require("../database/db");
const Sequelize = require ('sequelize');

const model = {

    teamMembership_Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },

    team_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
    },           

    user_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
    },           

    lastAction_date:{
        type: Sequelize.DATE,
        allowNull: false,
    }, 
    status:{
        type: Sequelize.BIGINT,
        allowNull: false,
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