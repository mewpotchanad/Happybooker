module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        title: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        }
    }, { underscored: true })


    Category.associate = db => {
        Category.belongsTo(db.CategoryName, {
            foreignKey: {
                name: 'categoryNameId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })

    }

    return Category
}