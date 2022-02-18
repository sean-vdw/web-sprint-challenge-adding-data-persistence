const db = require('../../data/dbConfig');

// [GET] /api/resources
function getResources() {
  return db('resources as r');
};

// [POST] /api/resources
function createResource(resource) {
  return db('resources').insert(resource)
    .then(([resource_id]) => {
      return db('resources').where('resource_id', resource_id).first();
    });
};

function getByName(name) {
  return db('resources').where('resource_name', name).first();
};

module.exports = {
  getResources,
  createResource,
  getByName
}