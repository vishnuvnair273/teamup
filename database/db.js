const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize('team_up','postgres','1234',{
    dialect : 'postgres',
})

sequelize.authenticate().then(() => {
    console.log("Connected");
}).catch(err => {
    console.log("Error : "+ err)
});

sequelize.sync()
module.exports.sequelize = sequelize;

