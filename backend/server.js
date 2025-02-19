import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();
const port = process.env.PORT || 4000;

// Connect to Database and Cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Test API Endpoint
app.get('/', (req, res) => res.send('Hello World!'));

// Error Handling Middleware (Handles any unknown routes)
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "API route not found" });
});

// Start Server
app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
