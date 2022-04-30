const express = require('express');
const router = express.Router();


const homeController = require('@controllers/front');


router.get('/', homeController.index);
router.post('/store', homeController.store);
router.get('/portfolio', homeController.portfolio);
router.get('/contactMe', homeController.contact);
router.get('/portfolio/landing', homeController.landing);
router.get('/portfolio/ecommerce', homeController.ecommerce);
router.get('/portfolio/Elearning', homeController.Elearning);
router.get('/portfolio/english', homeController.english);
router.get('/portfolio/resturant', homeController.resturant);


module.exports = router;