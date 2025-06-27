const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
const fileService = require('../queries/file')
const cloudStorage = require('../utils/cloudStorage')

module.exports = {
  getUploadForm: (req, res, next) => {
    res.render('upload-form')
  },
  uploadFile: [upload.single('userFile'), async(req, res, next) => {
    const file = {
      name: req.file.originalname,
      size: req.file.size,
      folderId: req.params.folderId,
    }
    await cloudStorage.uploadFile(req.user.id, req.file);
    await fileService.createFile(file)
    res.send('File uploaded')
  }],
  getFileDetails: async(req, res, next) => {
    const id = req.params.fileId;
    const file = await fileService.getFile(id);
    res.render('file-page', { file })
  }
}