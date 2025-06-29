const shareService = require('../queries/share');
const fileService = require('../queries/file')
const cloudStorage = require('../utils/cloudStorage');
const folderService = require('../queries/folder')
const userService = require('../queries/user')

module.exports = {
  getSharedFolder: async(req, res, next) => {
    const { linkId } = req.params;
    const link = await shareService.getShareLink(linkId);  
    if(!link) {
      return res.status(404).render('404-page')
    }
    if(new Date() > new Date(link.expiresAt)) {
      return res.send('Link is expired')
    }
    const validityDuration = Math.floor(Math.max(0, ((new Date(link.expiresAt) - new Date()) / 1000)))
    const user = await userService.findUser(link.createdById);
    const folder = await folderService.getFolder(link.folderId);
    const files = await fileService.getFolderFiles(link.folderId);
    const filePaths = files.map((file) => file.storagePath);
    const fileArr = await cloudStorage.generateShareLink(validityDuration, filePaths);
    const displayFiles = files.map((file, i) => ({name: file.name, url: fileArr[i].signedUrl}))
    if (!fileArr) {
      return res.status(500).render('server-error-page')
    }
    res.render('shared-folder', { displayFiles, folder, user })
  }
}