module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define("Shelf", {}, { underscored: true });

  Shelf.associate = (db) => {
    Shelf.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      },
      onDelete: "RESTRICT"
    });

    Shelf.belongsTo(db.Ebook, {
      foreignKey: {
        name: "ebookId",
        allowNull: false
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };

  return Shelf;
};
