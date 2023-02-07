module.exports = (sequelize, DataTypes) => {
    const Ebook = sequelize.define('Ebook', {
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
        }
    }, { 
        underscored: true 
    })

    Ebook.associate = db => {
        Ebook.hasMany(db.CategoryName, {
            foreignKey: {
                name: 'categoryId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })

        Ebook.belongsTo(db.Shelf, {
            foreignKey: {
                name: 'ebookId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })

    }

    return Ebook
}