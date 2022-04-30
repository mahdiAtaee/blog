module.exports = async (req, res, next) => {
    if (req.session.hasOwnProperty('user')) {
        return res.redirect('/');
    };
    next();
};