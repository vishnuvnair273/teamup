const db = require("../database/db");
const Sequelize = require ('sequelize');

const model = {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },

    token_id:{
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