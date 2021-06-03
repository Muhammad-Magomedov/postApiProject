const mongoose = require('mongoose');

const Comments = mongoose.Schema({
  text:String,
  postId: { type: mongoose.Schema.Types.ObjectId, ref:"Post" },
  author: String,
  createdAt:Date,
  updatedAt:Date

})

module.exports = mongoose.model("comment", Comments)