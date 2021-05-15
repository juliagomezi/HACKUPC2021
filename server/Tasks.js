const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subTask = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});


const task = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    group:  {
        type: String
    },
    data: {
        type: Date,
        default: Date.now
    },
    subtask: [subTask]
});
