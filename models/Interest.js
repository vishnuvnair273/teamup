const db = require("../database/db");
const Sequelize = require ('sequelize');


const model = {

    id: {
        type: Sequelize.BIGINT,
        primaryKey : true,
      },
    interest_name: {
          type: Sequelize.STRING,
          allowNull: false,
          
        },
    interest_code: {
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