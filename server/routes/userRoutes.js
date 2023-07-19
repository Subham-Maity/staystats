const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/user/get-users', userController.getUsers);
router.post('/user/create-user',userController.createUser);
router.post('/user/update-user', userController.updateUser);
router.post('/user/delete-user', userController.deleteUser);

module.exports = router;