const router = require('express').Router();
const controller = require('../controllers/authController');

router.get('/sign-up', controller.getSignUpForm)
router.post('/sign-up', controller.createUser)
router.get('/login', controller.getLoginForm)
router.post('/login', controller.loginUser)
router.get('/logout', controller.logoutUser)

module.exports = router;
