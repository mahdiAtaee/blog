const userModels = require('@models/user');
const validator = require('@validators/user');
const userRoles = require('@models/userRoles');

exports.users = async (req, res) => {
    const users = await userModels.findAll();

    res.adminRender('admin/users/index', {
        users,
        helpers: {
            roles: function (role = 'user', options) {
                return role === 1 ? "admin" : "user"
            }
        }
    })
}

exports.create = async (req, res) => {
    res.adminRender('admin/users/create');
}

exports.store = async (req, res) => {


    const userData = {
        full_name: req.body.user_name,
        email: req.body.user_email,
        password: req.body.user_password,
        role: req.body.role
    }

    const errors = validator.create(userData);

    if (errors.length > 0) {
        req.flash('errors', errors);
        return res.redirect('/admin/users/create');
    }


    const user = await userModels.create(userData);

    if (!user) {
        req.flash("errors", ["مشکلی رخ داده است"]);
        return res.redirect("/admin/users/create");
    }

    req.flash("success", ["با موفقیت کاربر جدید ایجاد شد"]);
    res.redirect('/admin/users');
}