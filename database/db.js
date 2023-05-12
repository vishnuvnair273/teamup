const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize('team_up','postgres','09032002',{
    dialect : 'postgres',
})

sequelize.authenticate().then(() => {
    console.log("Connected");
}).catch(err => {
    console.log("Error : "+ err)
});

sequelize.sync({alter :true})
module.exports.sequelize = sequelize;

