const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.REACT_APP_DB,
  process.env.REACT_APP_USER,
  process.env.REACT_APP_PASS,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
)

module.exports = sequelize;