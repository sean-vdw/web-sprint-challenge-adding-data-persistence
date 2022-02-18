const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects)
    })
    .catch(next);
});


module.exports = router;
