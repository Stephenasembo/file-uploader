const router = require('express').Router();
const controller = require('../controllers/indexController');

router.get('/', controller.getIndex)
router.get('/sign-up', controller.getSignUpForm)
router.post('/sign-up', controller.createUser)
router.get('/login', controller.getLoginForm)
router.post('/login', controller.loginUser)

module.exports = router;