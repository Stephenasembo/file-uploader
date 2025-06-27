const folderService = require('../queries/folder')

module.exports = {
  getCreateFolderForm: (req, res, next) => {
    res.render('folder-form')
  },
  createFolder: async(req, res, next) => {
    await folderService.createFolder(req.body.folderName, req.user.id)
    res.send('Folder created')
  },
  getFolderPage: async(req, res, next) => {
    const id = req.params.folderId;
    const folder = await folderService.getFolder(id);
    res.render('folder-page', { folder })
  },
  getUpdateFolderForm: (req, res, next) => {
    res.render('folder-update-form');
  },
  updateFolder: async (req, res, next) => {
    const id = req.params.folderId;
    const newName = req.body.folderName
    const folder = await folderService.updateFolder(newName, id);
    res.redirect(`/app/folder/${id}`)
  }
}