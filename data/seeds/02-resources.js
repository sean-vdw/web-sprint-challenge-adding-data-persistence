const resources = [
  { resource_name: 'The cheeseburger mentor', resource_description: 'The greatest cheeseburger chef of all time' },
  { resource_name: 'Home Depot', resource_description: 'Where you can find tools, goods, and advice' },
  { resource_name: 'Barista Ken', resource_description: 'Oh boy does Ken make some good java...' },
];

exports.resources = resources

exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(() => {
      return knex('resources').insert(resources);
    });
};
