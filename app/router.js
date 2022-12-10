const router = require('express').Router();

const mainController = require ('./controllers/mainController');
const pokemonController = require ('./controllers/pokemonController');

router.use(pokemonController.countPokedex);

router.get('/', mainController.home);

// Pokemon
router.get('/pokemons', pokemonController.searchPokemon, pokemonController.allPokemons);
router.get('/pokemon/:number', pokemonController.onePokemon);

// Types
router.get('/types', pokemonController.allTypes);
router.get('/types/:id', pokemonController.oneType);

// Pokedex
router.get('/pokedex', pokemonController.renderPokedex);

// Favoris
router.get('/pokedex/add/:id', pokemonController.addPokemon);
router.get('/pokedex/remove/:id', pokemonController.removePokemon);

router.use(mainController.notFound);

module.exports = router;
