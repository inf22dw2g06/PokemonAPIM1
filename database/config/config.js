require('dotenv').config();

module.exports = {
  development: {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_BASE,
    "port": "3306",
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_USER,
    database: process.env.DB_USER,
    host: process.env.DB_USER,
    dialect: process.env.DB_USER
  }
};
