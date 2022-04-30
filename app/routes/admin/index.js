const express = require('express');
const router = express.Router();


const adminController = require('@controllers/admin');

const showcommentRouter = require('./showComments');
const commentRouter = require('./comment');
const userRouter = require('./user');
const settingRouter = require('./setting');


router.use('/comments', showcommentRouter);
router.use('/', commentRouter);
router.use('/', userRouter);
router.use('/', settingRouter);

router.get('/dashboard', adminController.index);



module.exports = router;