const { Schema, model, ObjectId } = require('mongoose');

const User = new Schema({
    username:{ type: String, unique: true, required:true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    topics: [{ type: ObjectId, ref: 'Topic' }]
})

module.exports = model("User", User);