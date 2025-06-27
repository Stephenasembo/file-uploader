const upload = require('../config/uploadStorage')

module.exports = {
  getHomepage: (req, res, next) => {
    res.render('homepage')
  },
  getUploadForm: (req, res, next) => {
    res.render('upload-form')
  },
  uploadFile: [upload.single('userFile'), (req, res, next) => {
    res.send('File uploaded')
  }]
}