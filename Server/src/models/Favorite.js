const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoincrement: true 
        },
        name: {
           type:DataTypes.STRING,
           allowNull: false
        },
        status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown"),
         allowNull: false

        },
        species: {
         type:DataTypes.STRING,
           allowNull: false
        },

        gender: {
         type: DataTypes.ENUM("Famele", "Male", "Genderless", "unknow"),
         allowNull: false

        },
        origin: {
         type: DataTypes.STRING,
         allowNull: false

        },
        image: {
         type:DataTypes.STRING,
         allowNull: false

        }
   }, { timestamps: false });
};
