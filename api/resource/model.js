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

module.exports = {
  getResources,
  createResource
}