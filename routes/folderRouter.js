const router = require('express').Router();
const controller = require('../controllers/folderController');

router.get('/create', controller.getCreateFolderForm);
router.post('/create', controller.createFolder);
router.get('/:folderId', controller.getFolderPage);
router.get('/:folderId/update', controller.getUpdateFolderForm);
router.post('/:folderId/update', controller.updateFolder);
router.get('/:folderId/delete', controller.deleteFolder);
router.get('/:folderId/share', controller.getShareFolderPage)
router.post('/:folderId/share', controller.shareFolder)

module.exports = router;
