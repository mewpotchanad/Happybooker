const express = require('express');

const userController = require('../controllers/user-controller');
const authenticate = require('../middlewares/authenticate')

const router = express.Router();

router.patch('/', authenticate, userController.editProfile);

module.exports = router;