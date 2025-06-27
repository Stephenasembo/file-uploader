const upload = require('../config/uploadStorage')
const folderService = require('../queries/folder')

module.exports = {
  getHomepage: async (req, res, next) => {
    const folders = await folderService.getUserFolders(req.user.id)
    res.render('homepage', { folders })
  },
  getUploadForm: (req, res, next) => {
    res.render('upload-form')
  },
  uploadFile: [upload.single('userFile'), (req, res, next) => {
    res.send('File uploaded')
  }]
}