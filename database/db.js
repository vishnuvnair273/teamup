const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize('team_up','root','09032002',{
    dialect : 'mysql',
    host : 'localhost'
})

sequelize.authenticate().then(() => {
    console.log("Connected");
}).catch(err => {
    console.log("Error : "+ err)
});

sequelize.sync({alter:true})
module.exports.sequelize = sequelize;

