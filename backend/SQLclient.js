const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL

const sequelize = new Sequelize(databaseUrl, {
    dialogOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
})

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connected to ElephantSQL')
    }
    catch (error) {
        console.log('Failed connecting to ElephantSQL')
        return process.exit(1)
    }
}

module.exports = {
    connectToDatabase,
    sequelize
}