// this is mongoose schema this file directly imported to controllers

import mongoose from "mongoose";

// Mongoose Schema schema means i wanna to save this model in database
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String, // string to image convert using base64 modules........
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
