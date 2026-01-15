import express from 'express';
import { 
  createCategory, 
  getCategories, 
  deleteCategory, 
  updateCategory 
} from '../controllers/categoryController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, admin, createCategory)
  .get(getCategories);

router.route('/:id')
  .delete(protect, admin, deleteCategory)
  .put(protect, admin, updateCategory);

// මෙන්න මේ පේළිය අනිවාර්යයෙන්ම තියෙන්න ඕනේ
export default router;