const folderService = require('../queries/folder')

module.exports = {
  getCreateFolderForm: (req, res, next) => {
    res.render('folder-form')
  },
  createFolder: async(req, res, next) => {
    await folderService.createFolder(req.body.folderName, req.user.id)
    res.send('Folder created')
  },
}