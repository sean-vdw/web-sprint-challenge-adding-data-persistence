const tasks = [
  { task_description: 'get burgers and get cheese', task_notes: 'cook that up!!', task_completed: true, project_id: 1 },
  { task_description: 'buy materials', task_notes: 'wood, nails, screws', task_completed: false, project_id: 2 },
  { task_description: 'make a drip coffee', task_notes: 'grind beans and pour over boiling water', task_completed: true, project_id: 3 },
];

exports.tasks = tasks;

exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(() => {
      return knex('tasks').insert(tasks);
    });
};
