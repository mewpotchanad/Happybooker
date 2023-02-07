module.exports = (sequelize, DataTypes) => {
    const Shelf = sequelize.define('Shelf', {}, { underscored: true })


    Shelf.associate = db => {
        Shelf.belongsTo(db.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })

        Shelf.hasMany(db.Ebook, {
            foreignKey: {
                name: 'ebookId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })
    }

    return Shelf
}