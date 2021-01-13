import express from 'express';

// const Post = require('../models/postMessage');
// const uploader = require('../config/cloudinary-setup')

import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);


// router.post('/', uploader.single('file'), (req, res) => {
//     res.send("ok")
// })

export default router;