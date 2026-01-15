import express from 'express';
import { 
  getProducts, 
  getProductById, 
  createProduct, 
  deleteProduct, 
  updateProduct,
  createProductReview // 1. මේක import කරලා තියෙන්න ඕනේ
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct);

// 2. මේ Route එක අනිවාර්යයෙන්ම තියෙන්න ඕනේ
router.route('/:id/reviews').post(protect, createProductReview);

router.route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;