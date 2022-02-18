const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Projects.getProjects()
    .then(projects => {
      for (let i = 0; i < projects.length; i++) {
        projects[i].project_completed === 0 ? projects[i].project_completed = false : projects[i].project_completed = true;
      }
      res.json(projects)
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const project = req.body;
  Projects.createProject(project)
    .then(newProject => {
      newProject.project_completed === 0 ? newProject.project_completed = false : newProject.project_completed = true;
      res.status(201).json(newProject);
    })
    .catch(next);
});

module.exports = router;
