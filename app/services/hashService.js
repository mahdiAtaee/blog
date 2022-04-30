const bcrypt = require('bcrypt');
exports.hashPassword = (plainPass) => {
    return bcrypt.hashSync(plainPass, 10)
};

exports.comparePassword = (plainPass, hashpass) => {
    return bcrypt.compareSync(plainPass, hashpass);
}