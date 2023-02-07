module.exports = (sequelize, DataTypes) => {
    const CategoryName = sequelize.define('CategoryName', {}, { underscored: true })

    CategoryName.associate = db => {
        CategoryName.belongsTo(db.Ebook, {
            foreignKey: {
                name: 'categoryId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })

        CategoryName.hasOne(db.Category, {
            foreignKey: {
                name: 'categoryNameId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })


    }

    return CategoryName
}