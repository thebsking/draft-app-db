const { Model, DataTypes } = require('sequelize');

class Owner extends Model{};

Owner.init(
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
    team_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    draft_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'owner'
  }
);

module.exports = Owner;