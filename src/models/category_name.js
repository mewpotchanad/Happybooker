module.exports = (sequelize, DataTypes) => {
    const CategoryEbook = sequelize.define('CategoryEbook', {}, { underscored: true })

    CategoryEbook.associate = db => {
        CategoryEbook.belongsTo(db.Ebook, {
            foreignKey: {
                name: 'ebookId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })

        CategoryEbook.belongsTo(db.Category, {
            foreignKey: {
                name: 'categoryId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })


    }

    return CategoryEbook
}