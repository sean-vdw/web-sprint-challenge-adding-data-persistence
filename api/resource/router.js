const express = require('express');
const Resources = require('./model');
const { checkResourceUnique } = require('./middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
  Resources.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(next);
});

router.post('/', checkResourceUnique, (req, res, next) => {
  const newResource = req.body;
  Resources.createResource(newResource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router;