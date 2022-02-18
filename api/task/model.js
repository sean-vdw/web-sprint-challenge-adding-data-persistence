const db = require('../../data/dbConfig');

function getTasks() {
  return db('tasks as t')
    .join('projects as p', 't.project_id', '=', 'p.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')
};

function createTask(task) {
  return db('tasks').insert(task)
    .then(([task_id]) => {
      return db('tasks').where('task_id', task_id).first();
    });
};

module.exports = {
  getTasks,
  createTask
}