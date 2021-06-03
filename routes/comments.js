const { Router } = require ('express');
const commentController = require("../controllers/comments")
const router = Router()

router.get('/posts/:id/comments', postController.getCommentById)

router.post('/comments', postController.postComments)

router.delete('/comments/:id', postController.deleteCommentById)

router.patch('/comments/:id', postController.patchComments)

module.exports = router