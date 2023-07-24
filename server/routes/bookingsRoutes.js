const router = require('express').Router();
const bookingController = require('../controllers/bookingsController');


router.post('/booking/get-one-booking', bookingController.getBooking);
router.get('/booking/get-all-bookings', bookingController.getAllBookings);
router.post('/booking/create-booking', bookingController.createBooking);
router.post('/booking/update-booking', bookingController.updateBooking);
router.post('/booking/delete-booking', bookingController.deleteBooking);

module.exports = router;