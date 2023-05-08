const Sequelize = require('sequelize')

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
    email: {
      type: Sequelize.STRING,
      validate: { isEmail: true },
      unique: {
          args: true,
          msg: 'Email address already in use!'
      },
      allowNull: true,
    },
    email_verified_at: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING,
      unique: {
          args: true,
          msg: 'Phone number already in use!'
      },
      allowNull: true,
    },
    phone_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    type: {
      type: Sequelize.STRING
    },
    acreated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }

module.exports = { model }; 