const Posts = require("../models/Post")

class postController {
  async getPost(req, res) {
    try {
      const posts = await Posts.find({}).lean()
      res.json(posts)
    } catch (e) {
      res.json(e.message)
    }
  }
  async getPostId(req, res) {
    try {
      const post = await Posts.findById(req.params.id).lean()
      res.json(post)
    } catch (e) {
      res.json(e.message)
    }
  }
  async getPostByCategories(req, res) {
    try {
      const posts = await Posts.find({category: req.params.id})
      res.json(posts)
    } catch (e) {
      res.json(e.message)
    }
  }
  async postPost(req, res) {
    try {
      const post = new Posts({
        title: req.body.title,
        category: req.body.id,
      })
      await post.save()
      res.json(post)
    } catch (e) {
      res.json(e.message)
    }
  }
  async deletePost(req, res) {
    try {
      const post = await Posts.findByIdAndDelete({_id: req.params.id})
      res.json(post)
    } catch (e) {
      res.json(e.message)
    }
  }
  async updatePost(req, res) {
    try {
      const id = req.params
      const text = req.body.title
      const category = req.body.category
      const post = await Posts.findByIdAndUpdate(id, text, category, {new:true}).lean()
      res.json(post)
    } catch (e) {
      res.json(e.message)
    }
  }
}

module.exports = new postController()