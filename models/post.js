module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
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

  Post.associate = function(models) {
    // We're saying that a Post should belong to an User
    // A Post can't be created without an User due to the foreign key constraint
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
