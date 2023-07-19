const router = require('express').Router();
const hotelController = require('../controllers/hotelController');


router.get('/hotel/get-hotels' ,hotelController.getHotels);
router.post('/hotel/create-hotel',hotelController.createHotel);
router.post('/hotel/update-hotel', hotelController.updateHotel);
router.post('/hotel/delete-hotel', hotelController.deleteHotel);

module.exports = router;