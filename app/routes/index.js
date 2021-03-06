const frontRouter = require('./front');
const adminRouter = require('./admin');
const authRouter = require('./auth');

const auth = require('@middlewares/auth');
const admin = require('@middlewares/admin');
const guest = require('@middlewares/guest');

const authController = require('@controllers/auth');

module.exports = app => {
    app.use('/', frontRouter);
    app.use('/admin', [auth], [admin], adminRouter);
    app.use('/auth', [guest], authRouter);

    app.get('/logout', authController.logout);

    app.all('*', (req, res) => {
        res.render('errors/404', {
            layout: false
        });
    });
};