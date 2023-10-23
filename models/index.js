const User = require('./User');
const Maker = require('./Maker');
const Paddle = require('./Paddle');

Maker.hasMany(Paddle, {
  foreignKey: 'gallery_id',
});

Paddle.belongsTo(Maker, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Maker, Paddle };
