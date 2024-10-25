const Post = require('../models/User');
const multer = require('multer');


// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

const createPost = async (req, res) => {
  try {
    console.log("File: ", req.file); // Check if the file is coming through
    console.log("User: ", req.user); // Check if user data is available
    console.log("Body: ", req.body); // Check for other fields like description

    if (!req.file) {
      throw new Error("Image file not provided");
    }

    // Get file path from the request
    const imagePath = req.file.path;


    // Create a new post object
    const newPost = new Post({
      user: req.user._id, // Ensure the user ID is being attached correctly
      description: req.body.description,
      image: imagePath,
    });

    // Save the post in the database
    const savedPost = await newPost.save();

    // Respond with the saved post
    res.status(201).json({
      message: 'Post created successfully!',
      post: savedPost,
    });
  } catch (error) {
    console.log('Failed to create post:', error); // Log the error in the console
    res.status(500).json({ message: 'Failed to create post', error: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    // Fetch all posts from the database, populating the user information
    const posts = await Post.find().populate('user', 'username');

    // Respond with the fetched posts
    res.status(200).json(posts);
  } catch (error) {
    console.log('Error in getPosts:', error); // Log the error to the console
    res.status(500).json({ message: 'Failed to retrieve posts', error: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
};
