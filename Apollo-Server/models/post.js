const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../SQLclient')

class SQLPost extends Model {}

SQLPost.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    parent: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    postedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    topic: {
        type: DataTypes.TEXT,
        defaultValue: 'general'
    },
    picture: {
        type: DataTypes.TEXT,
        defaultValue: null
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'post',
    freezeTableName: true
})

module.exports = SQLPost