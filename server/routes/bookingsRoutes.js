const router = require('express').Router();
const bookingController = require('../controllers/bookingsController');


router.get('/booking/get-bookings', bookingController.getBookings);
router.post('/booking/create-booking',bookingController.createBooking);
router.post('/booking/update-booking', bookingController.updateBooking);
router.post('/booking/delete-booking', bookingController.deleteBooking);

module.exports = router;