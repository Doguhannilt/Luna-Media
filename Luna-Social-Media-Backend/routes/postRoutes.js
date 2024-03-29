import express from 'express'
import { createPost } from '../controllers/createPost.js';
import protectRoute from '../middlewares/protectRoute.js'
import { getPosts } from '../controllers/getPosts.js';
import { deletePost } from '../controllers/deletePost.js';
import { likeOrnot } from '../controllers/likePost.js';
import { reply } from '../controllers/replyPost.js';
import { feed } from '../controllers/feed.js';

const router = express.Router()

router.get("/:id", getPosts)
router.delete("/create",protectRoute, deletePost)
router.post("/create",protectRoute ,createPost)
router.post("/like/:id",protectRoute ,likeOrnot)
router.post("/reply/:id",protectRoute ,reply)
router.post("/feed",protectRoute ,feed)

export default router;