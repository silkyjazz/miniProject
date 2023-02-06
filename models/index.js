const Traveller = require ('./Traveler');
const Location = require ('./Locations')

// const TravellerLocation = sequelize.define('TravellerLocation', {
//     traveller_id:{
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'Location',
//             key: 'id'
//         }
//     },
//     location_id:{
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'Traveller',
//             key: 'id'
//         }
//     }

// });

// Define the many-to-many association between User and Project through UserProject
Traveller.belongsToMany(Location, { through: TravellerLocation });
Location.belongsToMany(Traveller, { through: TravellerLocation });