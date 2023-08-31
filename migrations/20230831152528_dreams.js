/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('dreams', (table) => {
        table.increments('id').primary();
        table.string('dream_name').notNullable();
        table.string('description');
        table.string('category').notNullable();
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('dreams');
  };
  
