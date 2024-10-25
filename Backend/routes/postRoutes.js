const express = require('express');
const router = express.Router();
const { createPost, getPosts } = require('../controllers/postController');
const multer = require('multer');
const Post = require('../models/Post'); // Ensure the path is correct

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

// Route to create a new post
router.post('/create', upload.single('image'), async (req, res) => {
    try {
        const { userId, description } = req.body;
        const imagePath = req.file ? req.file.path : '';  // Path to uploaded image

        // Create a new post
        const newPost = new Post({
            user: userId,
            description,
            image: imagePath
        });

        await newPost.save();
        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error(error.stack);  // Log the full error details
        res.status(500).json({ message: 'Error creating post', error: error.message });
    }
});

// Other post routes, like fetching posts
router.get('/posts', getPosts);

module.exports = router;
