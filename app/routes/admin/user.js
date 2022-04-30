const express = require('express');
const router = express.Router();


const userController = require('@controllers/admin/users');


router.get('/users', userController.users);
router.get('/users/create', userController.create);
router.post('/users/store', userController.store);



module.exports = router;