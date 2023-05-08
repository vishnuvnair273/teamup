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
  intrest_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  intrest_code: {
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

