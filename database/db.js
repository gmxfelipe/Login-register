const Sequelize = require('sequelize')
const db = {}

// Start Conexão com banco de dados //
const sequelize = new Sequelize('fiecdev12', 'root', 'root', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  operatorsAliases: false,
// End Conexão com banco de dados //

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db