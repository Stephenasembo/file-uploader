const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
const fileService = require('../queries/file')
const cloudStorage = require('../utils/cloudStorage');

module.exports = {
  getUploadForm: (req, res, next) => {
    const { folderId } = req.params
    res.render('upload-form', { folderId })
  },
  uploadFile: [upload.single('userFile'), async(req, res, next) => {
    const file = {
      name: req.file.originalname,
      size: req.file.size,
      folderId: req.params.folderId,
    }
    const uploadedFile = await cloudStorage.uploadFile(req.user.id, req.file);
    file.storagePath = uploadedFile.path
    await fileService.createFile(file)
    res.redirect(`/app/folder/${file.folderId}`)
  }],
  getFileDetails: async(req, res, next) => {
    const id = req.params.fileId;
    const file = await fileService.getFile(id);
    res.render('file-page', { file })
  },
  downloadFile: async(req, res, next) => {
    const id = req.params.fileId;
    const file = await fileService.getFile(id)
    const filePath = file.storagePath;
    const { error, url } = await cloudStorage.downloadFile(filePath)
    if(error) {
      return res.status(500).render('server-error-page')
    }
    res.redirect(url)
  },
  deleteFile: async (req, res, next) => {
    const id = req.params.fileId;
    const file = await fileService.getFile(id)
    await cloudStorage.deleteFile(file.storagePath);
    await fileService.deleteFile(file.id);
    res.redirect(`/app/folder/${file.folderId}`);
  }
}