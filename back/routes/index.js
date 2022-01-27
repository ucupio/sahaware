const router = require('express').Router()
const { login, register } = require('../controllers/index')

router.post('/api/auth/register', register)
router.post('/api/auth/login', login)



router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Welcome to Articles_App Server, please check API Documentation',
  })
})

module.exports = router
