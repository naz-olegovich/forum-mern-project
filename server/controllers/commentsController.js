const User = require('../models/User.js');
const Topic = require('../models/Topic.js')
const Comment = require('../models/Comment.js')
const mongoose = require('mongoose');


class CommentsController {
    async addComment(req, res) {
        try {
            const { id } = req.params;
            const { text } = req.body
            const currentUser = await User.findOne({ _id: req.user.id })
            const currentTopic = await Topic.findOne({ _id: id })

            const comment = new Comment({
                topic: currentTopic._id,
                user: currentUser._id,
                text,
                created_at: new Date()
            })
            await comment.save()

            currentTopic.comments.push(comment._id)
            await currentTopic.save()

            return res.status(201).json(comment)
        } catch (e) {
            console.log(e)
            return res.status(400).json({ message: e.message })
        }
    }

/*
    async deleteTopic(req, res) {
        try {
            const { id } = req.params;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).send(`No topic with id: ${id}`)
            }
            await Topic.findByIdAndRemove(id)
            return res.json({ message: "Post deleted successfully." });
        } catch (e) {
            console.log(e)
        }
    }
    */
}

module.exports = new CommentsController()