const db = require("../database/db");
const Sequelize = require ('sequelize');

const model = {

    team_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },

    user_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
    },           
    role_from_to:{
        type: Sequelize.JSON,
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