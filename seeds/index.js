const sequelize = require('../config/connection');
const seedMaker = require('./makerData');
const seedPaddle = require('./paddlegData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMaker();

  await seedPaddle();

  process.exit(0);
};

seedAll();
