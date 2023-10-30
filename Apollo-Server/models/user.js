const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../SQLclient')

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    signupDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
    },
    profilePic: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    passwordhash: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'user',
    freezeTableName: true
})

module.exports = User