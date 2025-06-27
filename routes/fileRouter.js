const router = require('express').Router()
const controller = require('../controllers/fileController');

router.get('/upload/:folderId', controller.getUploadForm)
router.post('/upload/:folderId', controller.uploadFile)
router.get('/:fileId', controller.getFileDetails)
router.get('/download/:fileId', controller.downloadFile)

module.exports = router;