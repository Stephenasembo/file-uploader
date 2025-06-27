const router = require('express').Router();
const controller = require('../controllers/folderController');

router.get('/create', controller.getCreateFolderForm);
router.post('/create', controller.createFolder);

module.exports = router;
