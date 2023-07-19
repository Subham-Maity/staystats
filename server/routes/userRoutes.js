const router = require('express').Router();

router.get('/user/get-users');
router.post('/user/create-user');
router.post('/user/update-user');
router.post('/user/delete-user');

module.exports = router;