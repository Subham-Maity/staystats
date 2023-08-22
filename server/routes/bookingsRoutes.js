const router = require('express').Router();
const bookingController = require('../controllers/bookingsController');


router.post('/booking/get-one-booking', bookingController.getBooking);
router.post('/booking/get-all-bookings', bookingController.getAllBookings);
router.get('/booking/get-all-bookings/search', bookingController.getAllBookingsBySearch);
router.post('/booking/create-booking', bookingController.createBooking);
router.post('/booking/update-booking', bookingController.updateBooking);
router.post('/booking/cancel-booking', bookingController.cancelBooking);

module.exports = router;