import express from 'express';

// const Post = require('../models/postMessage');
// const uploader = require('../config/cloudinary-setup')

import { getPostsBySearch, getPosts, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);



// router.post('/', uploader.single('file'), (req, res) => {
//     res.send("ok")
// })

export default router;