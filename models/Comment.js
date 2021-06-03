const mongoose = require('mongoose');

const Comments = mongoose.Schema({
  text:String,
  postId: { type: mongoose.Types._ObjectId, ref:"Post" },
  author: String,
  createdAt:Date,
  updatedAt:Date

})

module.exports = mongoose.model("comment", Comments)
const mongoose = require('mongoose');

const Comments = mongoose.Schema({
  text:String,
  postId: { type: mongoose.Types._ObjectId, ref:"Post" },
  author: String,
  createdAt:Date,
  updatedAt:Date

})

module.exports = mongoose.model("comment", Comments)