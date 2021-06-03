const { Router } = require('express');
const postController = require("../controllers/posts")
const router = Router()

router.get("/posts", postController.getPost)
router.get("/posts/:id", postController.getPostId)
router.get("/categories/:id/posts", postController.getPostByCategories)

router.post("/posts", postController.postPost)

router.delete("/posts/:id", postController.deletePost)

router.patch("/posts/:id", postController.updatePost)

module.exports = router