const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../SQLclient')

class VisitorCount extends Model {}

VisitorCount.init({
    count: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'visitor_count',
    freezeTableName: true
})

module.exports = VisitorCount