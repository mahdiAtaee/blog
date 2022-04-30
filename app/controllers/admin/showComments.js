const commentModel = require('@models/comment');

exports.index = async (req, res) => {

    const commentid = req.params.commentID;
    const result = await commentModel.find(commentid);

    res.adminRender('admin/showComments/index', {
        layout: "admin",
        comments: result
    });
};