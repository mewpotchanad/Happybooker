module.exports = (sequelize, DataTypes) => {
  const CategoryEbook = sequelize.define("CategoryEbook", {}, { underscored: true });

  CategoryEbook.associate = (db) => {
    CategoryEbook.belongsTo(db.Ebook, {
      foreignKey: {
        name: "ebookId",
        allowNull: false
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });

    CategoryEbook.belongsTo(db.Category, {
      foreignKey: {
        name: "categoryId",
        allowNull: false
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };

  return CategoryEbook;
};
