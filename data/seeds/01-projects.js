const projects = [
  { project_name: 'Cheeseburgers', project_description: 'Make a good cheeseburger', project_completed: false },
  { project_name: 'Tree House', project_description: 'Make a treehouse', project_completed: false },
  { project_name: 'Have Some Coffee', project_description: 'Make some coffee.. drink it.', project_completed: true },
];

exports.projects = projects;

exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(() => {
      return knex('projects').insert(projects)
    });
};
