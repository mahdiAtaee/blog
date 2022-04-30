const models = require('@models/comment');
const dataService = require('@services/dataService');
const commentStatuses = require('./commentStatus');


exports.comments = async (req, res) => {

    const comments = await models.findAll();

    const presentedComments = comments.map(comment => {
        comment.persian_created_at = dataService.toPersianTime(comment.created_at);
        return comment;
    });

    res.adminRender('admin/comments/index', {
        layout: 'admin',
        comments: presentedComments,
        helpers: {
            commentBg: function (status, options) {
                let cssClass = 'alert ';
                switch (true) {
                    case status === commentStatuses.APPROVE:
                        cssClass += 'alert-success'
                        break;
                    case status === commentStatuses.REJECT:
                        cssClass += 'alert-danger'
                        break;
                    case status === commentStatuses.REVIEW:
                        cssClass += 'alert-dark'
                        break;
                }
                return cssClass;
            }
        }
    });
};

exports.approve = async (req, res) => {
    const commentid = req.params.commentID;

    const result = await models.approve(commentid);

    if (result) {
        req.flash("success", ['پیام مورد نطر با موفقیت تایید شد']);
    }
    req.flash("errors", ["مشکلی رخ داده است"])

    res.redirect('/admin/comments');
}

exports.reject = async (req, res) => {
    const commentid = req.params.commentID;

    const result = await models.reject(commentid);
    if (result) {
        req.flash("success", ['پیام مورد نطر با موفقیت رد شد']);
    }
    req.flash("errors", ["مشکلی رخ داده است"])

    res.redirect('/admin/comments');
}

exports.delete = async (req, res) => {
    const commentid = req.params.commentID;

    const result = await models.delete(commentid);
    if (result) {
        req.flash("success", ['پیام مورد نطر با موفقیت حذف شد']);
    }
    req.flash("errors", ["مشکلی رخ داده است"])

    res.redirect('/admin/comments');

}