const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize-client');

class Pokemon extends Model {}

// "nom" varchar(255) NOT NULL,
// "pv" int NOT NULL,
// "attaque" int NOT NULL,
// "defense" int NOT NULL,
// "attaque_spe" int NOT NULL,
// "defense_spe" int NOT NULL,
// "vitesse" int NOT NULL,

Pokemon.init({
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pv: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  attaque: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  defense: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  attaque_spe: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  defense_spe: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  vitesse: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'pokemon'
});


module.exports = Pokemon;
