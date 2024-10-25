const express = require("express");
const jwt = require("jsonwebtoken"); // for token generation
const User = require("../models/User"); // User model
require('dotenv').config();

const router = express.Router();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

// Registration route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
      const user = await User.signup(username, email, password);  // Pass username

      // Create a token
      const token = createToken(user._id);

      res.status(200).json({ email, token });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
