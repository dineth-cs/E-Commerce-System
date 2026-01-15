import Banner from '../models/Banner.js';

// Get All Banners
export const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find({ active: true });
    res.json(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Banner
export const createBanner = async (req, res) => {
  const { title, image, category } = req.body;
  try {
    const banner = new Banner({ title, image, category });
    const createdBanner = await banner.save();
    
    // Notify frontend via socket
    req.app.get('socketio').emit('banner_updated');
    
    res.status(201).json(createdBanner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Banner
export const deleteBanner = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (banner) {
      await banner.deleteOne();
      req.app.get('socketio').emit('banner_updated');
      res.json({ message: 'Banner removed' });
    } else {
      res.status(404).json({ message: 'Banner not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};