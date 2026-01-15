import mongoose from 'mongoose';

// 1. Review Schema
const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}, { timestamps: true });

// 2. Main Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  category: { type: String, required: true },
  brand: { type: String, required: true, default: 'Generic' },
  
  // 🔥 Updated Image Logic
  images: [ { type: String, required: true } ], // Array of images
  image: { type: String, required: true }, // Main image (First one)

  countInStock: { type: Number, required: true, default: 0 },
  reviews: [reviewSchema],
  rating: { type: Number, required: true, default: 0 },
  numReviews: { type: Number, required: true, default: 0 },
  showOnHome: { type: Boolean, default: true }

}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;