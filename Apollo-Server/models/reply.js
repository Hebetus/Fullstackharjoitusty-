const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../SQLclient')

class Reply extends Model {}

Reply.init({
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    pic: {
        type: DataTypes.TEXT
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'reply',
    freezeTableName: true
})

module.exports = Reply