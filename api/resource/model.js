const db = require('../../data/dbConfig');

// [GET] /api/resources
function getResources() {
  return db('resources as r');
};

// [POST] /api/resources
function createResource(resource) {

};

module.exports = {
  getResources,
  createResource
}