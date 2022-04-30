const userService = require('@services/userService');

module.exports = app => {


    app.use((req, res, next) => {
        const errors = req.flash("errors");
        const success = req.flash("success");
        const hasError = errors.length > 0;
        let user = null;
        if ('user' in req.session) {
            user = req.session.user;
            user.avatar = userService.gravatar(user.email);
        }



        res.frontRender = (template, options) => {
            options = {
                layout: "front",
                bodyClass: "bg-gray",
                errors,
                ...options
            };
            res.render(template, options);
        }

        res.newRender = (template, options) => {
            options = {
                ...options,
                hasError,
                success,
                errors
            };
            res.render(template, options);
        }

        res.adminRender = (template, options) => {
            options = {
                ...options,
                layout: "admin",
                hasError,
                success,
                errors,
                user
            }
            res.render(template, options);
        }

        next();
    });
}