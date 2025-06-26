const router = require('express').Router();
const controller = require('../controllers/indexController');

router.get('/', controller.getIndex)

module.exports = router;