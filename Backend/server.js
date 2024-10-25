const express = require('express');
const userRoutes = require('./routes/userRoutes');  // Adjust path as needed
const postRoutes = require('./routes/postRoutes');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer');
const dotenv = require('dotenv').config();
// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

// Use the user routes
app.use('/api/user', userRoutes);  // Route prefix can vary
app.use('/api/post', postRoutes); 
// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
