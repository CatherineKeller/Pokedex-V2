const Pokemon = require('./Pokemon');
const Type = require('./Type');

// Pokemon <-> (Many-to-Many)

Pokemon.belongsToMany(Type, {
  through: 'pokemon_type',
  as: 'types',
  foreignKey: 'pokemon_numero'
});
Type.belongsToMany(Pokemon, {
  through: 'pokemon_type',
  as: 'pokemons',
  foreignKey: 'type_id'
});

module.exports = { Pokemon, Type };
