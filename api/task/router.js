const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Tasks.getTasks()
    .then(tasks => {
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].task_completed === 0 ? tasks[i].task_completed = false : tasks[i].task_completed = true;
      }
      res.json(tasks);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const newTask = req.body;
  Tasks.createTask(newTask)
    .then(task => {
      task.task_completed === 0 ? task.task_completed = false : task.task_completed = true;
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router;