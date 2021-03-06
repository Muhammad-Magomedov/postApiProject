const mongoose = require('mongoose');

const Posts = mongoose.Schema({
  title: String,
  category: { type: mongoose.Types._ObjectId, ref: "Category"},
  createdAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model("post", Posts)