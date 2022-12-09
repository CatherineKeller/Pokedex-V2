const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize-client');

class Type extends Model {}

// "name" varchar(255) NOT NULL,
// "color" varchar(6) NOT NULL,

Type.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'type'
});


module.exports = Type;
