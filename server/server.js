import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRouter from './routes/contact.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Apply Middlewares
app.use(cors()); // Allow requests from our React development server
app.use(express.json()); // Parse JSON body payloads

// Graceful Database Connection to MongoDB Atlas (Optional)
const mongoURI = process.env.MONGODB_URI;

if (mongoURI) {
  console.log('Connecting to MongoDB Atlas...');
  mongoose.connect(mongoURI)
    .then(() => console.log('Successfully connected to MongoDB Atlas!'))
    .catch((err) => {
      console.error('MongoDB Atlas connection error:', err.message);
      console.log('Server will continue running in fallback mode without database storage.');
    });
} else {
  console.log('No MONGODB_URI found in environment variables.');
  console.log('Server will run in standalone console-logging fallback mode.');
}

// Mount Route Handlers
app.use('/api', contactRouter);

// Basic Welcome Route to confirm API is online
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'Full Stack Developer Portfolio API is fully functional!'
  });
});

// Boot Server
app.listen(PORT, () => {
  console.log(`Backend Express server is running on port ${PORT}`);
});
