const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    date: {
      type: String,
      required: [true, "Please add an date"],
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);


const Post = mongoose.model("Post", postSchema);
module.exports = Post;
