const router = require('express').Router();
const controller = require('../controllers/appController');

router.get('/', controller.getHomepage)

module.exports = router;