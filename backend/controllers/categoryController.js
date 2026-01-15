import Category from '../models/Category.js';

export const createCategory = async (req, res) => {
  try {
    const { name, description, image, btnText } = req.body;
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) return res.status(400).json({ message: 'Category already exists' });

    const category = await Category.create({ 
        name, 
        description, 
        image, 
        // Save button text
        btnText: btnText || 'Shop Now' 
    });
    
    req.app.get('socketio').emit('category_updated');

    res.status(201).json(category);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ createdAt: -1 });
    res.json(categories);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      await category.deleteOne();
      req.app.get('socketio').emit('category_updated');
      res.json({ message: 'Category removed' });
    } else { res.status(404).json({ message: 'Category not found' }); }
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const updateCategory = async (req, res) => {
  try {
    const { name, description, image, btnText } = req.body;
    const category = await Category.findById(req.params.id);
    if (category) {
      category.name = name || category.name;
      category.description = description || category.description;
      category.image = image || category.image;
      
      // Update button text
      category.btnText = btnText || category.btnText;
      
      await category.save();
      req.app.get('socketio').emit('category_updated');

      res.json(category);
    } else { res.status(404).json({ message: 'Category not found' }); }
  } catch (error) { res.status(500).json({ message: error.message }); }
};