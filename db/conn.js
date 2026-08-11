const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})


try{
    sequelize.authenticate()
    console.log('Connected')
} catch(error){
    console.log(`Connection not possible: ${error}`)
}

module.exports = sequelize