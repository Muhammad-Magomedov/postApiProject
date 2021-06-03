const comments = require('../models/Comment')

class commentController {

  async getCommentById (req,res) {
    try {
      const postId = await comments.find({postId:req.params.id})
      res.json(postId)
    } catch (e) {
      res.json(e.message)
    }

  }

  async deleteCommentById (req, res) {
    try {
      const comment = await comments.findByIdAndDelete(req.params.id).lean()
      res.json(comment)
    } catch (e) {
      res.json(e.message)
    }
  }

  async postComments (req, res) {
    try {
      const postComment = await comments.create({}).lean()
      await postComment.save()

      res.json(postComment)
    }catch(e) {
      res.json(e.message)
    }
  }

  async patchComments (req, res) {
    try {
      const postId = req.params.id
      const text = req.body.text
      const author = req.body.author
      const post = await comments.findByIdAndUpdate(postId, text, author, {new:true}).lean()
      res.json(post)
    }catch (e) {
      res.json(e.message)
    }
  }
}

module.exports = new commentController()