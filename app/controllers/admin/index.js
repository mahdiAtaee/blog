const models = require('@models/comment');
const userModels = require('@models/user');
const dataService = require('@services/dataService');
const commentStatuses = require('./comments/commentStatus');

exports.index = async (req, res) => {
    if (req.session.views) {
        req.session.views++;
    } else {
        req.session.views = 1;
    }

    const users = await userModels.count();
    const comments = await models.count();

    res.adminRender('admin/dashboard/index', {
        views: req.session.views,
        comments,
        users
    });
};