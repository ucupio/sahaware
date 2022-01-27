require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT)
}

module.exports = generateToken