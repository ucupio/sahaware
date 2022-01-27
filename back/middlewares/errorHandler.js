function errorHandler(err, req, res, next) {
  if (err.name == 'SequelizeUniqueConstraintError') {
    res.status(400).json({ error: 'some value already exists' })
  } else if (err.name == 'SequelizeValidationError') {
    let errors = []
    for (let i = 0; i < err.errors.length; i++) {
      errors.push(err.errors[i].message)
    }
    res.status(400).json({ error: errors.join(',') })
  } else {
    console.log(err)
    let status = err.status || 500
    let error = err.msg || 'internal server error'
    res.status(status).json({ error })
  }
}

module.exports = errorHandler
