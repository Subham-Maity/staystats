const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/user/fetch-user', userController.getUser);
router.get('/user/get-users', userController.getUsers);
router.get('/user/get-users/search', userController.getUsersBySearch);
router.post('/user/create-user',userController.createUser);
router.post('/user/update-user', userController.updateUser);
router.post('/user/delete-user', userController.deleteUser);

module.exports = router;