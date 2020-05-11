exports.up = function(knex) {
    return knex.schema.createTable('brands', function(table) {
        table.integer('ID').primary();
        table.string('Name').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('brands');
};
