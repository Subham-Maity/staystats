const router = require('express').Router();

router.get('/booking/get-bookings');
router.post('/booking/create-booking');
router.post('/booking/update-booking');
router.post('/booking/delete-booking');

module.exports = router;