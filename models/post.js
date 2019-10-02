module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
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
