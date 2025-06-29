const folderService = require('../queries/folder')
const fileService = require('../queries/file')
const cloudStorage = require('../utils/cloudStorage')
const shareService = require('../queries/share')

module.exports = {
  getCreateFolderForm: (req, res, next) => {
    res.render('folder-form')
  },
  createFolder: async(req, res, next) => {
    const folder = await folderService.createFolder(req.body.folderName, req.user.id)
    res.redirect(`/app/folder/${folder.id}`);
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
    const folderFiles = await folderService.deleteFolder(id);
    await cloudStorage.deleteFolderFiles(folderFiles);
    res.redirect('/app')
  },
  getShareFolderPage: (req, res, next) => {
    res.render('share-folder-form');
  },
  shareFolder: async(req, res, next) => {
    const { duration } = req.body;
    const { folderId } = req.params;
    const userId = req.user.id;
    let expiryDate = new Date(Date.now() + duration * 60 * 60 * 24 * 1000);
    const folder = await folderService.getFolder(folderId)
    const shareLink = await shareService.generateShareLink(userId, folderId, expiryDate)
    console.log(shareLink)
    const url = `https://localhost:8080/share/${shareLink.id}`;
    res.render('share-folder', { url, folder })
  },
}