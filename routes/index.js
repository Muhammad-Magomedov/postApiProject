const { Router } = require('express');
const router = Router();

router.use('/categories', require('./categories'));

router.use('/comments', require('./comments'));

router.use('/posts', require('./posts'));

module.exports = router;