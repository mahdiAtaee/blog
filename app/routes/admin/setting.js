const express = require('express');
const router = express.Router();


const settingController = require('@controllers/admin/setting');


router.get('/settings', settingController.index);
router.post('/settings', settingController.store);



module.exports = router;