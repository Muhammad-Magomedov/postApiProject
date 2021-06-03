const { Router } = require('express');
const categoryController = require('../controllers/categories');
const router = Router();

router.get('/categories', categoryController.getCategory)
router.get('/categories/:id', categoryController.getCategoryId)

router.post('/categories', categoryController.postCategory)

router.delete('/categories/:id', categoryController.deleteCategory)

router.patch('/categories/:id', categoryController.patchCategory)

module.exports = router;
