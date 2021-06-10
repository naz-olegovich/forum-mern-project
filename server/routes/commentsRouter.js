const Router = require('express');
const commentsController = require('../controllers/commentsController.js');
const authMiddleware = require('../middleware/auth.middleware.js');
const router = new Router();

router.post('/add/:id', authMiddleware, commentsController.addComment);

module.exports = router;
