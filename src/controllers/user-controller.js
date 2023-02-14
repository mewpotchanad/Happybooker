const { User } = require('../models');

exports.editProfile = async (req, res, next) => {
    try {
        const value = req.body

        console.log(value)
        await User.update(value, { where: { id: req.user.id } });
        res.status(200).json(value);
    } catch (err) {
        next(err)
    }
}