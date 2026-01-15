import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// 1. User Login වී ඇත්දැයි බැලීම (Protect)
export const protect = async (req, res, next) => {
  let token;

  // Header එකේ Token එක තියෙනවද බලනවා
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Token එක වෙන් කරගන්නවා (Bearer <token>)
      token = req.headers.authorization.split(' ')[1];

      // Token එක check කරනවා
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret123');

      // User විස්තර සොයාගන්නවා (Password එක නැතුව)
      req.user = await User.findById(decoded.id).select('-password');

      next(); // ඊළඟ පියවරට යන්න දෙනවා
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// 2. User Admin කෙනෙක්දැයි බැලීම (Admin Only)
export const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') { // role එක admin නම් විතරයි
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as an admin' });
  }
};