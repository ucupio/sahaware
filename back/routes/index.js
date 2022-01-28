const router = require('express').Router()
const { login, register, createCategory, getCategories, getCategory, getArticle, getArticles, createArticle } = require('../controllers/index')
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

/**
   * @swagger
   * definitions:
   *   Users:
   *     required:
   *       - email
   *       - password
   *     properties:
   *       name:
   *         type: string
   *       email:
   *         type: string
   *       password:
   *         type: string
   *       phone:
   *         type: string
   *   Articles:
   *     properties:
   *       title:
   *         type: string
   *       short_description:
   *         type: string
   *       description:
   *         type: string
   *       image:
   *         type: string
   *       userId:
   *         type: integer
   *       categoryId:
   *         type: integer
   *   Category:
   *     properties:
   *       title:
   *         type: string
   */

  /**
   * @swagger
   * tags:
   *   - name: Auth
   *     description: Login And Register
   *   - name: Category
   *     description: Get and Post Category
   *   - name: Article
   *     description: Get and Post Article
   */


/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    description: Use to register Users
 *    tags: [Auth]
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
 *    responses:
 *      '201':
 *        description: A succesfully registered
 *      '500':
 *        description: Internal server error
 */
router.post('/api/auth/register', register)

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    description: Login to the application
 *    tags: [Auth]
 *    parameters:
 *      - name: email
 *        description: User's email.
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: User's password.
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: A succesfully login
 *      '400':
 *        description: Error - Email Not Found
 *      '401':
 *        description: Error - Password Not Match
 *      '500':
 *        description: Internal server Error
 */
router.post('/api/auth/login', login)

/**
 * @swagger
 * /api/category:
 *  get:
 *    description: Use to get all categories
 *    tags: [Category]
 *    responses:
 *      '200':
 *        description: A succesfully get categories
 *      '500':
 *        description: Internal server Error
 */
router.get('/api/category', getCategories)

/**
 * @swagger
 * /api/category/{categoryid}:
 *  get:
 *    description: Use to get category by Id
 *    tags: [Category]
 *    parameters:
 *      - name: categoryid
 *        description: Category Id
 *        in: path
 *        type: String
 *    responses:
 *      '200':
 *        description: A succesfully get category
 *      '500':
 *        description: Internal server Error
 */
router.get('/api/category/:categoryid', getCategory)

/**
 * @swagger
 * /api/category:
 *  post:
 *    description: add new Categori
 *    tags: [Category]
 *    parameters:
 *    - name: title
 *      description: title category
 *      in: formData
 *      type: String
 *  responses:
 *    '201':
 *      description: A succesfully created
 *    '500':
 *        description: Internal server Error
 */
router.post('/api/category', createCategory)

/**
 * @swagger
 * /api/article:
 *  get:
 *    description: Use to get all articles
 *    tags: [Article]
 *    responses:
 *      '200':
 *        description: A succesfully get all articles
 *      '500':
 *        description: Internal server Error
 */
router.get('/api/article', getArticles)

/**
 * @swagger
 * /api/article/{articleid}:
 *  get:
 *    description: Use to get article by Id
 *    tags: [Article]
 *    parameters:
 *      - name: articleid
 *        description: Article Id
 *        in: path
 *        type: String
 *    responses:
 *      '200':
 *        description: A succesfully get article
 *      '500':
 *        description: Internal server Error
 */
router.get('/api/article/:articleid', getArticle)

/**
 * @swagger
 * /api/article:
 *  post:
 *    description: Use to Add new article
 *    tags: [Article]
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
 *    responses:
 *      '201':
 *        description: A succesfully add new article
 *      '500':
 *        description: Internal server Error
 */
router.post('/api/article', createArticle)

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


module.exports = router
