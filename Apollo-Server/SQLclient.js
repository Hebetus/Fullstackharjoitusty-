const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL

const sequelize = new Sequelize(databaseUrl, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
})

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate()
        console.log('connected to ElephantSQL')
    }
    catch (error) {
        console.log('failed connecting to ElephantSQL')
        return process.exit(1)
    }
}

module.exports = {
    connectToDatabase,
    sequelize
}