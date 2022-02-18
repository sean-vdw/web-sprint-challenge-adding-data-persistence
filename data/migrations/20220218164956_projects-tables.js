
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id');
      tbl.string('project_name').notNullable();
      tbl.string('project_description', 256);
      tbl.boolean('project_completed').defaultTo('false');
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
      tbl.string('resource_name').unique().notNullable();
      tbl.string('resource_description', 256);
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id');
      tbl.string('task_description', 256).notNullable();
      tbl.string('task_notes', 256);
      tbl.boolean('task_completed').defaultTo('false');
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
    })
    .createTable('project_resources', tbl => {
      tbl.increments('project_resources_id');
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
