require('dotenv/config');

const { Sequelize } = require('sequelize');

// Instance de connexion à la BDD Postgres
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = sequelize;
