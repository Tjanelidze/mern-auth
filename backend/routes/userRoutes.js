import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/', userController.registerUser);
router.post('/auth', userController.authUser);
router.post('/logout', userController.logoutUser);
router
  .route('/profile')
  .get(userController.getUserProfile)
  .put(userController.updateUserProfile);

export default router;
