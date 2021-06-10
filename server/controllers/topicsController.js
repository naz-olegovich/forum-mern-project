const User = require('../models/User.js');
const Topic = require('../models/Topic.js');
const Comment = require('../models/Comment.js');
const mongoose = require('mongoose');


class TopicsController {
    async getTopics(req, res) {
        try {
            const topicsWithComments = await Topic.aggregate([
                {
                    $lookup: {
                        from: 'comments',
                        localField: 'comments',
                        foreignField: '_id',
                        as: 'comments'
                    },
                },
                { $sort: { comments: -1 } }
            ]);
            return res.status(200).json(topicsWithComments);

        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: 'Can not get topics' });
        }
    }

    async getTopicById(req, res) {
        try {
            const { id } = req.params;
            const topic = await Topic.findOne({ _id: id });
            const comments = await Comment.find({ topic: topic._id }).sort({ createdAt: -1 });
            return res.status(200).json({
                ...topic._doc,
                comments
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: 'Can not get necessary topic' });
        }
    }


    async createTopic(req, res) {
        try {
            const { title, description, text } = req.body;
            const currentUser = await User.findOne({ _id: req.user.id });
            const topic = new Topic({
                title,
                description,
                text,
                user: currentUser._id,
                username: currentUser.username,
                createdAt: new Date(),
                comments: []
            });
            await topic.save();

            currentUser.topics.push(topic._id);
            await currentUser.save();

            return res.status(201).json(topic);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ message: e.message });
        }
    }


    async deleteTopic(req, res) {
        try {
            const { id } = req.params;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).send(`No topic with id: ${id}`);
            }
            await Topic.findByIdAndRemove(id);

            const currentUser = await User.findOne({ _id: req.user.id });
            currentUser.topics = currentUser.topics.filter((topic) => topic.toString() !== id);
            await currentUser.save();

            await Comment.deleteMany({ topic: id });

            return res.json({ message: 'Post deleted successfully.' });
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new TopicsController();
