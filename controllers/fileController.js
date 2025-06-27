const upload = require('../config/uploadStorage')
const fileService = require('../queries/file')

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
    await fileService.createFile(file)
    res.send('File uploaded')
  }],
}