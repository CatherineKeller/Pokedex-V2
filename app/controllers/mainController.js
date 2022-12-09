const { Pokemon } = require('../models');

const mainController = {
  home: async (req, res) => {
    try {
      const pokemons = await Pokemon.findAll();

      res.render('main/home', { pokemons });

    } catch (error) {
      console.trace(error);
      res.status(500).send("Une erreur s'est produite...");
    }
  },
  notFound: (req, res) => {
    res.status(404).render('main/notFound');
  },
};

module.exports = mainController;
