const bcrypt = require('bcrypt')

const hashing = (password) => {
    const salt = bcrypt.genSaltSync(8)
    const hash = bcrypt.hashSync(password, salt)
    console.log(salt)
    return hash
}
const comparing = (myPlaintextPassword, hash) => {
    return bcrypt.compareSync(myPlaintextPassword, hash)
}

module.exports = {
    hashing, comparing
}