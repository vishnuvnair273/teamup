const db = require("../database/db");
const Sequelize = require ('sequelize');

const model = {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
    fileLocation: {
          type: Sequelize.STRING,
          allowNull: true,
        },
    email: {
          type: Sequelize.STRING,
          allowNull: true,
        },
    gender: {
            type: Sequelize.STRING,
            allowNull: true,
          },
    age: {
            type: Sequelize.BIGINT,
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