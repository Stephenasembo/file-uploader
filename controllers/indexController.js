module.exports = {
  getIndex: (req, res, next) => {
    if(req.user) {
      return res.redirect('/app')
    }
    res.render('index')
  }
}