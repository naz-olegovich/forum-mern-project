const { Schema, model, ObjectId } = require('mongoose');

const Comment = new Schema({
    topic: { type: ObjectId, ref: 'Topic' },
    user: { type: ObjectId, ref: 'User' },
    text: { type: String, required: true },
    created_at: { type: Date, required: true },
})

module.exports = model("Comment", Comment);