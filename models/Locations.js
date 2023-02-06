const { Model, DataTypes } = require('sequilize');

const sequilize = require ( '../config/connection.js');

class Location extends Model{}

Location.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'location',  
    }
);
module.exports = Locations;