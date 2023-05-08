const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pick extends Model{};

Pick.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'owner',
        key: 'id'
      }
    },
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'player',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pick'
  }
);

module.exports = Pick;