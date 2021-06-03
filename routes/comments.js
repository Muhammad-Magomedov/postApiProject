const { Router } = require ('express');
const commentController = require("../controllers/comments")
const router = Router()

router.get('/posts/:id/comments', commentController.getCommentById)

router.post('/comments', commentController.postComments)

router.delete('/comments/:id', commentController.deleteCommentById)

router.patch('/comments/:id', commentController.patchComments)

module.exports = router