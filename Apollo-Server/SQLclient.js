const Sequelize = require('sequelize')
const { Umzug, SequelizeStorage } = require('umzug')

const databaseUrl = process.env.DATABASE_URL

const sequelize = new Sequelize(databaseUrl, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
})

const runMigrations = async () => {
    const migrator = new Umzug({
        migrations: {
            glob: 'migrations/*.js',
        },
        storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
        context: sequelize.getQueryInterface(),
        logger: console
    })
    const migrations = await migrator.up()
    console.log('All migrations up to date', {
        files: migrations.map((mig) => mig.name)
    })
}

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate()
        await runMigrations()
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