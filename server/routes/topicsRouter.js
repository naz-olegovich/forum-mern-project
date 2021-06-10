const Router = require('express');
const topicController = require('../controllers/topicsController.js');
const authMiddleware = require('../middleware/auth.middleware.js');
const router = new Router();

router.get('/', topicController.getTopics);
router.get('/:id', authMiddleware, topicController.getTopicById);
router.post('/', authMiddleware, topicController.createTopic);
router.delete('/:id', authMiddleware, topicController.deleteTopic);


module.exports = router;
