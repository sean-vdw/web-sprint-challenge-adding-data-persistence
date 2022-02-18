const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Resources.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const newResource = req.body;
  Resources.createResource(newResource)
    .then(resource => {
      res.status(201).json(resource);
    });
});

module.exports = router;