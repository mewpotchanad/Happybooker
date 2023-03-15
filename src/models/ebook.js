module.exports = (sequelize, DataTypes) => {
  const Ebook = sequelize.define(
    "Ebook",
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      publisher: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      author: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      category: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      underscored: true
    }
  );

  Ebook.associate = (db) => {
    Ebook.hasMany(db.CategoryEbook, {
      foreignKey: {
        name: "categoryId",
        allowNull: false
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });

    Ebook.hasMany(db.Shelf, {
      foreignKey: {
        name: "ebookId",
        allowNull: false
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };

  return Ebook;
};
