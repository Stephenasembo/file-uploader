const folderService = require('../queries/folder')

module.exports = {
  getHomepage: async (req, res, next) => {
    const folders = await folderService.getUserFolders(req.user.id)
    res.render('homepage', { folders })
  },
}