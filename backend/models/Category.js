import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  // 🔥 New Field for Button Text
  btnText: { 
    type: String, 
    default: 'Shop Now' 
  }, 
  image: {
    type: String, 
    required: false, 
    default: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2064&auto=format&fit=crop' 
  }
}, {
  timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);
export default Category;