const Sequelize = require('sequelize')

const model  = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  contact_number: {
    type: Sequelize.STRING,
  },
  
  otp: {
      type: Sequelize.STRING,
  },
  active: {
      type: Sequelize.STRING,
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
};
module.exports = {model}
