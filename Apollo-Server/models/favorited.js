const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../SQLclient')

class Favorited extends Model {}

Favorited.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' }
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'posts', key: 'id' }
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'favorited',
    freezeTableName: true
})

module.exports = Favorited