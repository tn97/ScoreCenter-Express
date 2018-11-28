module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {

    team: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
