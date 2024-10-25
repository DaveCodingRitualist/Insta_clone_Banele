const jwt = require('jsonwebtoken');
const User = require('../models/Post');

const protect = async (req, res, next) => {
  let token;
 
  // Check if the request has an authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
    
  ) {
    try {
      // Get the token from the Bearer token in the authorization header
      token = req.headers.authorization.split(' ')[1];
      // console.log(req.headers.authorization); // Ensure the token is present
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Decoded token:', decoded); // Debug: Print the decoded payload
      // Attach the user information to the request
      req.user = await User.findById(decoded.user._id).select('-password');
      
      // Continue to the next middleware or route handler
      next();
    } catch (error) {
      console.error('Error with token:', error);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
