const { Model, DataTypes } = require('sequilize');

const sequelize = require ( '../config/connection.js');

class Traveller extends Model{}

Traveller.init(
    {
        traveller_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Traveller',  
    }
);
module.exports = Traveller;