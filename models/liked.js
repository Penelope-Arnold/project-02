module.exports = function(sequelize, DataTypes) {
  var Liked = sequelize.define("Liked", {
    city: {
      type: DataTypes.TEXT
    },
    country: {
      type: DataTypes.TEXT
    },
    category: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING
    }
  });

  Liked.associate = function(models) {
    // We're saying that a Liked should belong to an User
    // A Liked can't be created without an User due to the foreign key constraint
    Liked.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Liked;
};
