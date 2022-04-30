const express = require('express');
const router = express.Router();


const commentController = require('@controllers/admin/comments');



router.get('/comments', commentController.comments);
router.get('/comments/approve/:commentID', commentController.approve);
router.get('/comments/reject/:commentID', commentController.reject);
router.get('/comments/delete/:commentID', commentController.delete);


module.exports = router;