const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const  { title, description, group, date, checked, subtask} = req.body;
    const task = new Task({ title, description, group, date, checked, subtask })
    await task.save();
    console.log(task);
    res.json({status: 'Task Saved'});
});

router.put('/:id', async (req, res) => {
    const  { title, description, group, date, checked, subtask} = req.body;
    const newTask = {title, description, group, date, checked, subtask};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: 'Task Deleted'});
});

module.exports = router;