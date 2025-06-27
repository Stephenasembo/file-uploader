const router = require('express').Router();
const controller = require('../controllers/appController');
const authorizeUser = require('../middleware/authorizeUser');
const folderRouter = require('../routes/folderRouter')
const fileRouter = require('../routes/fileRouter')

router.use('/', authorizeUser)
router.get('/', controller.getHomepage)
router.use('/folder', folderRouter);
router.use('/file', fileRouter)

module.exports = router;