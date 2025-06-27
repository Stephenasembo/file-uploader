const router = require('express').Router();
const controller = require('../controllers/appController');
const authorizeUser = require('../middleware/authorizeUser');
const folderRouter = require('../routes/folderRouter')

router.use('/', authorizeUser)
router.get('/', controller.getHomepage)
router.get('/upload', controller.getUploadForm)
router.post('/upload', controller.uploadFile)
router.use('/folder', folderRouter);

module.exports = router;