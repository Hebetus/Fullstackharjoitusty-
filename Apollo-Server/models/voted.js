const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../SQLclient')

class Vote extends Model {}

Vote.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' }
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'posts', key: 'id' }
    },
    liked: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'voted',
    freezeTableName: true
})

module.exports = Vote