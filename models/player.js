const { Model, DataTypes } = require('sequelize');

class Player extends Model{};

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rank_ovr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rank_pos: {
      type: DataTypes.INTEGER,
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
    bye_week: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'player'
  }
);

module.exports = Player;