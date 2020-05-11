exports.up = function(knex) {
    return knex.schema.createTable('models', function(table) {
        table.integer('MakeID').notNullable().references('ID').inTable('brands');

        table.integer('ID').primary();
        table.string('Name').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('models');
};
