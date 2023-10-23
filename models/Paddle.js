const { Paddle, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Paddle extends Model {}

Paddle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exhibitio_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'maker',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'paddle',
  }
);git add .module

module.exports = Paddle;

function createPost(title, content, author) {
  return {
    title: title,
    content: content,
    author: author,
    date: new Date()
  };
}
