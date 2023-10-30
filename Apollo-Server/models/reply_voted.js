const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../SQLclient')

class ReplyVote extends Model {}

ReplyVote.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    replyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'reply',
            key: 'id'
        }
    },
    liked: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'reply_voted',
    freezeTableName: true
})

module.exports = ReplyVote