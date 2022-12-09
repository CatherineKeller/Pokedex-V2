const Pokemon = require('./Pokemon');
const Type = require('./Type');

// Pokemon <-> (Many-to-Many)

Pokemon.belongsToMany(Type, {
  through: 'pokemon_type',
  as: 'types',
  foreignKey: 'type_id'
});
Type.belongsToMany(Pokemon, {
  through: 'pokemon_type',
  as: 'pokemons',
  foreignKey: 'pokemon_numero'
});

module.exports = { Pokemon, Type };
