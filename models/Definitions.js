const db = require("../database/db");
const userModel = require("./User")
const doctorModel = require("./Doctor")
const otpModel = require("./Otp");
const auditModel = require("./Audit");
const advertisement = require("./Advertisement");
const content = require("./Content");
const session = require("./Session")
const brand = require("./Brands");
const interest = require("./Interest");
const profile = require("./Profile");
const team = require("./team");
const sensitiveTables = ["user","doctor"];

const tableID = {
  "user": 110,
  "doctor" : 111,
  "session":112,
  "otp" : 121,
  "audit" : 131,
  "advertisement" : 141,
  "content" : 151,
  "brand" : 161,
  "session" : 171,
  "interest": 181,
  "profile": 191,
  "team": 201,
}



const userSQLDef = db.sequelize.define(
  'user',
  userModel.model,
  {
    tableName: "user",
    timestamps: false
  });

const doctorSQLDef = db.sequelize.define(
  'doctor',
  doctorModel.model,
  {
    tableName: "doctor",
    timestamps: false
  }
)


const sessionSQLDef = db.sequelize.define(
  'session',
  session.model,
  {
    tableName: "session",
    timestamps: false
  }
)

const otpSQLDef = db.sequelize.define(
  'otp',
  otpModel.model,
  {
    tableName : "otp",
    timestamps : false
  }
)

const contentSQLDef = db.sequelize.define(
  'content',
  content.model,
  {
    tableName: "content",
    timestamps: false 
  }
)


const advertisementSQLDef = db.sequelize.define(
  'advertisement',
  advertisement.model,
  {
    tableName: "advertisement",
    timestamps: false
  }

)

const auditSQLDef = db.sequelize.define(
  'audit',
  auditModel.model,
  {
    tableName : "audit",
    timestamps : false
  }
)

const brandSQLDef = db.sequelize.define(
  'brand',
  brand.model,
  {
    tableName : "brand",
    timestamps : false
  }
)

const interestSQLDef = db.sequelize.define(
  'interset',
  interest.model,
  {
    tableName : "interest",
    timestamps : false
  }
)

const profileSQLDef = db.sequelize.define(
  'profile',
  profile.model,
  {
    tableName : "profile",
    timestamps : false
  }
)
const teamSQLDef = db.sequelize.define(
  'team',
  team.model,
  {
    tableName : "team",
    timestamps : false
  }
)

const modelDef = {
  "user": userSQLDef,
  "doctor" : doctorSQLDef,
  "otp" : otpSQLDef,
  "audit" : auditSQLDef,
  "advertisement" : advertisementSQLDef,
  "session": sessionSQLDef,
  "content" : contentSQLDef,
  "brand" : brandSQLDef,
  "interest": interestSQLDef,
  "profile": profileSQLDef,
  "team": teamSQLDef,
}

module.exports = { modelDef ,sensitiveTables,tableID}
