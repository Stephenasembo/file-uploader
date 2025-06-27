module.exports = {
  getHomepage: (req, res, next) => {
    res.render('homepage')
  },
  getUploadForm: (req, res, next) => {
    res.render('upload-form')
  },
  uploadFile: (req, res, next) => {
    res.send('File uploaded')
  }
}