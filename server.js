// const {Sequelize, DataTypes} = require("sequelize");
// const sequelize = new Sequelize(
//  'teamup_db',
//  'root',
//  '09032002',
//   {
//     host: 'localhost',
//     dialect: 'mysql'
//   }
// );

// sequelize.authenticate().then(() => {
//    console.log('Connection has been established successfully.');
// }).catch((error) => {
//    console.error('Unable to connect to the database: ', error);
// });


// const User = db.sequelize.define("users", {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//       },

//    Name: {
//      type: DataTypes.STRING,
//      allowNull: false
//    },
//    Phone: {
//      type: DataTypes.INTEGER,
//      allowNull: false

//    },
//    Email: {
//      type: DataTypes.STRING,
//      allowNull: false
//    }
// });

// sequelize.sync().then(() => {
//     console.log('User table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });
 