const {DataTypes} = require("sequelize")
const db = require("../Config/db.config")

module.exports = db.define("Test", {
     
  id:  {
     type: DataTypes.BIGINT,
    notNull: true,
    autoincrement: true,
    primaryKey: true
}}
,
{timestamp: true})

db.sync({alter: true})
