const express = require('express');

const UserController = require('../../controllers/user-controller');
const {AuthRequestValidatorMiddleware} = require('../../middleware/index');
const router = express.Router();

router.post('/signup', AuthRequestValidatorMiddleware.validateUserAuth, UserController.create);
router.post('/signin', AuthRequestValidatorMiddleware.validateUserAuth, UserController.signIn);
router.get('/isAuthenticated', UserController.isAuthenticated);
router.get('/isAdmin', AuthRequestValidatorMiddleware.validateifAdminRequest, UserController.isAdmin);
module.exports = router;