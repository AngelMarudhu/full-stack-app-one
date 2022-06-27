// Processss Twoooooooo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

import express from "express";
import { getPost, createPost, updatePost } from "../Controllers/Posts.js";

const router = express.Router();

// Alll controllers write down there controllers getpost means all controllers funtions write in there controllers posts.js function of getPost
router.get("/", getPost);

router.post("/", createPost);

router.patch("/:id", updatePost);

export default router;
