const db = require('../../data/dbConfig');

// {
//   "project_id": project_id,
//   "project_name": project_name,
//   "project_description": project_description,
//   "project_completed": project_completed
// }


// [GET] '/api/projects'
function getProjects() {
  return db('projects as p')
};

// [POST] '/api/projects'
function createProject(project) {
  return db('projects').insert(project)
    .then(([project_id]) => {
      return db('projects').where('project_id', project_id).first();
    });
};

module.exports = {
  getProjects,
  createProject
}