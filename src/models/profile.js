module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
        status: {
            type: DataTypes.ENUM('Active', 'Inactive'),
            allowNull: false,
            defaultValue: 'Inactive'
        }
    }, { 
        underscored: true 
    })

    Profile.associate = db => {
        Profile.belongsTo(db.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })
    }

    return Profile
}