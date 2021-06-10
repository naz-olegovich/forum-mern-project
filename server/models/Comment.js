const { Schema, model, ObjectId } = require('mongoose');

const Comment = new Schema({
    topic: { type: ObjectId, ref: 'Topic' },
    user: { type: ObjectId, ref: 'User' },
    username: { type: String },
    text: { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date() },
});

module.exports = model('Comment', Comment);
