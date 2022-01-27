const jwt = require('jsonwebtoken')
const {SelecterdCourse} = require('../models')

const authentication = (req, res, next) => {
    if (!req.headers.access_token) res.status(500).json({error: "you must login first"})
    const token = req.headers.access_token
    try {
        const decoded = jwt.verify(token, process.env.JWT)
        req.user = decoded
        console.log(decoded)
        next()
    } catch(err) {
        res.status(500).json({error: "internal server error"})
    }
}
const authorization = (req, res, next) => {
    const {id} = req.params
    SelecterdCourse.findOne({
        where: {
            id,
            userId : req.user.id
        }
    })
        .then (course =>{
            if (!course) res.status(404).json({error: "course"})
            req.course = course
            next()
        })
        .catch( error =>{
            res.status(404).json({error: "You are not authorized"})
        })
}

module.exports = {
    authentication, authorization
}