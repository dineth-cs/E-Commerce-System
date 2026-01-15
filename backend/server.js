import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { createServer } from 'http'; 
import { Server } from 'socket.io'; 

// Routes Imports
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import bannerRoutes from './routes/bannerRoutes.js'; // 🔥 Banner Routes Import කළා

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// --- Config ---
// Image Uploads සඳහා ලිමිට් වැඩි කළා (Base64 strings සඳහා)
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

// --- Socket.io Setup ---
const httpServer = createServer(app); // Express එක HTTP Server එකට දානවා
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // Frontend URL එක (Vite default port)
    methods: ["GET", "POST"]
  }
});

// Socket.io Connection Check
io.on("connection", (socket) => {
  console.log("⚡ New Client Connected:", socket.id);
  socket.on("disconnect", () => {
    console.log("Client Disconnected", socket.id);
  });
});

// io එක හැමතැනම (Controllers වල) පාවිච්චි කරන්න පුළුවන් වෙන්න සෙට් කරනවා
app.set('socketio', io);

// --- Database Connection ---
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

// --- Routes ---
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/banners', bannerRoutes); // 🔥 Banner API එක සෙට් කළා


// --- Start Server ---
// app.listen වෙනුවට httpServer.listen පාවිච්චි කරන්න ඕනේ (Socket.io නිසා)
httpServer.listen(PORT, () => {
    connectDB();
    console.log(`🚀 Server running on port ${PORT}`);
});