const router = require('express').Router()
const { login, register } = require('../controllers/index')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')


const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Sahaware',
      description: "Article API information",
      contact: {
        name: "Maulana Yusuf Azmi"
      },
      servers: ["http://localhost:3001"]
    }
  },
  apis: ["./routes/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
console.log(swaggerDocs)
/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    description: Use to register Users
 *    parameters:
 *    - name: name
 *      description: user name
 *      in: formData
 *      type: String
 *    - name: email
 *      description: email user
 *      in: formData
 *      type: String
 *    - name: password
 *      description: password user
 *      in: formData
 *      type: String
 *    - name: phone
 *      description: phone user
 *      in: formData
 *      type: String
 *  responses:
 *    '200':
 *      description: A succesfully registered
 */
router.post('/api/auth/register', register)

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    description: Use to login Users
 *    parameters:
 *    - name: email
 *      description: email user
 *      in: formData
 *      type: String
 *    - name: password
 *      description: password user
 *      in: formData
 *      type: String
 *  responses:
 *    '200':
 *      description: A succesfully registered
 */
router.post('/api/auth/login', login)

/**
 * @swagger
 * /api/auth/category:
 *  get:
 *    description: Use to get all categories
 *  responses:
 *    '200':
 *      description: A succesfully get categories
 */
router.get('/api/category')

/**
 * @swagger
 * /api/auth/category/{categoryid}:
 *  get:
 *    description: Use to get category by Id
 *  responses:
 *    '200':
 *      description: A succesfully get category
 */
router.get('/api/category/:categoryid')

/**
 * @swagger
 * /api/category:
 *  post:
 *    description: Use to login Users
 *    parameters:
 *    - name: email
 *      description: email user
 *      in: formData
 *      type: String
 *  responses:
 *    '200':
 *      description: A succesfully registered
 */
router.post('/api/category')

/**
 * @swagger
 * /api/auth/article:
 *  get:
 *    description: Use to get all articles
 *  responses:
 *    '200':
 *      description: A succesfully get all articles
 */
router.get('/api/article')

/**
 * @swagger
 * /api/auth/article/{articleid}:
 *  get:
 *    description: Use to get article by Id
 *  responses:
 *    '200':
 *      description: A succesfully get article
 */
router.get('/api/article/:articleid')

/**
 * @swagger
 * /api/article:
 *  post:
 *    description: Use to login Users
 *    parameters:
 *    - name: title
 *      description: article title
 *      in: formData
 *      type: String
 *    - name: short_description
 *      description: article short_description
 *      in: formData
 *      type: String
 *    - name: description
 *      description: article description
 *      in: formData
 *      type: String
 *    - name: image
 *      description: article image
 *      in: formData
 *      type: String
 *    - name: userId
 *      description: article userId
 *      in: formData
 *      type: String
 *    - name: categoryId
 *      description: article categoryId
 *      in: formData
 *      type: String
 *  responses:
 *    '200':
 *      description: A succesfully registered
 */
router.post('/api/article')

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


module.exports = router
