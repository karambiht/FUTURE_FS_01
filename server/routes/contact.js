import express from 'express';
import mongoose from 'mongoose';
import Message from '../models/Message.js';

const router = express.Router();

// POST /api/contact - Receive form data, validate, and store
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Basic Field Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please fill in all required fields.' 
    });
  }

  // 2. Basic Email Regex Validation
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please provide a valid email address.' 
    });
  }

  try {
    // 3. Optional MongoDB Atlas Support
    // Check if Mongoose connection is established (readyState === 1 is connected)
    if (mongoose.connection.readyState === 1) {
      const newMessage = new Message({ name, email, message });
      await newMessage.save();
      console.log('Successfully saved message to MongoDB Atlas.');
      return res.status(201).json({
        success: true,
        message: 'Your message has been saved to the database successfully!'
      });
    } else {
      // Graceful fallback if database is not configured
      console.log('MongoDB not connected. Submission logged in server console:');
      console.log(`[Message Submission] Name: ${name} | Email: ${email} | Msg: ${message}`);
      return res.status(200).json({
        success: true,
        message: 'Message received successfully on the server!'
      });
    }
  } catch (err) {
    console.error('Error handling contact submission:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred. Please try again later.'
    });
  }
});

export default router;
