const router = require('express').Router();
const controller = require('../controllers/appController');
const authorizeUser = require('../middleware/authorizeUser');

router.use('/', authorizeUser)
router.get('/', controller.getHomepage)
router.get('/upload', controller.getUploadForm)
router.post('/upload', controller.uploadFile)

module.exports = router;