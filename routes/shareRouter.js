const router = require('express').Router();
const controller = require('../controllers/shareController')

router.get('/:linkId', controller.getSharedFolder)

module.exports = router;