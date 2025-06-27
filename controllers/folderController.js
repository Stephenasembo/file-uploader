const folderService = require('../queries/folder')
const fileService = require('../queries/file')

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
    const files = await fileService.getFolderFiles(id);
    res.render('folder-page', { folder, files })
  },
  getUpdateFolderForm: (req, res, next) => {
    res.render('folder-update-form');
  },
  updateFolder: async (req, res, next) => {
    const id = req.params.folderId;
    const newName = req.body.folderName
    const folder = await folderService.updateFolder(newName, id);
    res.redirect(`/app/folder/${id}`)
  },
  deleteFolder: async (req, res, next) => {
    const id = req.params.folderId;
    const folder = await folderService.deleteFolder(id);
    res.redirect('/app')
  },
}