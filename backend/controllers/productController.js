import Product from '../models/Product.js';

// ... (getProducts, getProductById are same) ...
export const getProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword ? { name: { $regex: req.query.keyword, $options: 'i' } } : {};
    const categoryQuery = req.query.category ? { category: req.query.category } : {};

    if (req.query.pageNumber) {
        const pageSize = 8;
        const page = Number(req.query.pageNumber);
        let filter = { ...keyword, ...categoryQuery };
        if (!req.query.category && !req.query.keyword) { filter = { ...filter, showOnHome: true }; }
        const count = await Product.countDocuments(filter);
        const products = await Product.find(filter).select('-description -reviews').sort({ createdAt: -1 }).limit(pageSize).skip(pageSize * (page - 1));
        res.json({ products, page, pages: Math.ceil(count / pageSize), count });
    } else {
        const products = await Product.find({ ...keyword, ...categoryQuery }).select('-description -reviews').sort({ createdAt: -1 });
        res.json(products);
    }
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product); else res.status(404).json({ message: 'Product not found' });
  } catch (error) { res.status(500).json({ message: error.message }); }
};

// --- 🔥 CREATE PRODUCT (Handles Multiple Images) ---
export const createProduct = async (req, res) => {
  const { name, description, price, category, brand, images, countInStock, rating, showOnHome } = req.body;
  try {
    // Determine main image
    const mainImage = images && images.length > 0 ? images[0] : '/images/sample.jpg';

    const product = new Product({ 
        name, description, price, category, brand, countInStock, rating: rating || 0, showOnHome,
        images: images, // Save Array
        image: mainImage // Save Main
    });
    const createdProduct = await product.save();

    const io = req.app.get('socketio');
    io.emit('product_updated'); 

    res.status(201).json(createdProduct);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

// --- 🔥 UPDATE PRODUCT (Handles Multiple Images) ---
export const updateProduct = async (req, res) => {
  const { name, description, price, category, brand, images, countInStock, rating, showOnHome } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.countInStock = countInStock || product.countInStock;
      product.rating = rating || product.rating;
      
      if(showOnHome !== undefined) product.showOnHome = showOnHome;
      
      // Update Images
      if(images && images.length > 0) {
          product.images = images;
          product.image = images[0];
      }

      const updatedProduct = await product.save();
      const io = req.app.get('socketio');
      io.emit('product_updated');

      res.json(updatedProduct);
    } else { res.status(404).json({ message: 'Product not found' }); }
  } catch (error) { res.status(500).json({ message: error.message }); }
};

// ... (deleteProduct & createProductReview are same) ...
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      const io = req.app.get('socketio');
      io.emit('product_updated');
      res.json({ message: 'Product removed' });
    } else { res.status(404).json({ message: 'Product not found' }); }
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const createProductReview = async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    const alreadyReviewed = product.reviews.find((r) => r.user.toString() === req.user._id.toString());
    if (alreadyReviewed) { res.status(400).json({ message: 'Product already reviewed' }); return; }
    const review = { name: req.user.name, rating: Number(rating), comment, user: req.user._id };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
    await product.save();
    res.status(201).json({ message: 'Review added' });
  } else { res.status(404).json({ message: 'Product not found' }); }
};