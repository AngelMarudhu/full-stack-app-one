// these are controllers passing to routes file because easy to find problems and scalble........

import mongoose from "mongoose";
import PostMessage from "../Models/PostsMessage.js";

// Client Searching For Database...
export const getPost = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    const postMessages = await PostMessage.find();

    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  const Post = req.body;
  const newPost = new PostMessage(Post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post is This same id ");

  const updatedPost = PostMessage.findByIdAndUpdate(_id, post, { new: true });
  res.json(updatePost);
};
