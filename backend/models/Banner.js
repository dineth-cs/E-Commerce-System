import mongoose from 'mongoose';

const bannerSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { 
      type: String, 
      required: true, 
      enum: ['hero', 'middle'], // Banner එක එන්නේ උඩටද (hero) මැදටද (middle) කියලා තීරණය කරන්න
      default: 'hero' 
  },
  active: { type: Boolean, default: true }
}, {
  timestamps: true,
});

const Banner = mongoose.model('Banner', bannerSchema);
export default Banner;