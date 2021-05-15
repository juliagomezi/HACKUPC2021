const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    group:  { type: String },
    date: { type: String },
    checked: { type: Boolean, required: true },
    subtask: [{ 
        title: { type: String, required: true },
        description: { type: String },
        checked: { type: Boolean, required: true }
    }]
});

module.exports = mongoose.model('Task', task);