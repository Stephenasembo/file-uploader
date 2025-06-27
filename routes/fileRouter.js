const router = require('express').Router()
const controller = require('../controllers/fileController');

router.get('/upload/:folderId', controller.getUploadForm)
router.post('/upload/:folderId', controller.uploadFile)
router.get('/:fileId', controller.getFileDetails)

module.exports = router;