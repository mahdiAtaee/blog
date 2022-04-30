const authService = require('@services/authService');
const userRoles = require('@models/userRoles');

exports.showLogin = (req, res) => {
    res.newRender('auth/login/index', {
        layout: "auth"
    });
}

exports.doLogin = async (req, res) => {

    const {
        user_email,
        user_password
    } = req.body;

    const user = await authService.login(user_email, user_password);


    if (!user) {
        req.flash("errors", ["ایمیل یا کلمه عبور اشتباه می باشد!"]);
        return res.redirect('/auth/login');
    }
    req.session.user = user;

    const pathToRedirect = user.role === userRoles.ADMIN ? "/admin/dashboard" : "/";
    res.redirect(pathToRedirect);
}

exports.showRegister = (req, res) => {
    res.newRender('auth/register/index', {
        layout: "auth"
    });
}

exports.doRegister = (req, res) => {

}

exports.logout = async (req, res) => {
    req.session.destroy(error => {
        res.redirect('/auth/login');
    });
};