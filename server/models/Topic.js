const { Schema, model, ObjectId } = require('mongoose');

const Topic = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    text: { type: String, required: true },
    user: { type: ObjectId, ref: 'User' },
    username: { type: String },
    createdAt: { type: Date, required: true, default: new Date() },
    comments: [{ type: ObjectId, ref: 'Comment' }]
});

module.exports = model('Topic', Topic);
