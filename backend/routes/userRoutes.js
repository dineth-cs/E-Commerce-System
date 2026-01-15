import express from 'express';
import { 
  authUser, 
  registerUser, 
  getUsers, 
  deleteUser,
  updateUserProfile, 
  getUserProfile,
  forgotPassword, // අලුතින්
  resetPassword   // අලුතින්
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(registerUser)
  .get(protect, admin, getUsers);

router.post('/login', authUser);

// Profile Routes
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Password Reset Routes
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resetToken', resetPassword);

router.route('/:id').delete(protect, admin, deleteUser);

export default router;