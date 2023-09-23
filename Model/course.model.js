const {DataTypes} = require("sequelize")
const db = require("../Config/db.config")

module.exports  = db.define("Course", {
   
    id: {
        type: DataTypes.BIGINT,
         notNull: true,
         autoIncrement: true,
         primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        notNull:true,
    },
    description: {
              type: DataTypes.STRING,
              notNull:true
    },
    price: {
        type: DataTypes.DOUBLE,
        notNull:true
    }

}, {timestamps: true},)

db.sync({alter: true})


