const express = require('express');
const router = express.Router();
const showCommentsController = require('@controllers/admin/showComments');


router.get('/show/:commentID', showCommentsController.index);


module.exports = router;