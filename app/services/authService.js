const usermodel = require('@models/user');
const hashService = require('@services/hashService');

exports.login = async (email, user_password) => {

    const user = await usermodel.findByEmail(email);
    if (!user) {
        return false;
    }


    const {
        password
    } = user;

    return hashService.comparePassword(user_password, password) ? user : false;
};