exports.up = function(knex) {
    return knex.schema.createTable('versions', function(table) {
        table.integer('ModelID').notNullable().references('ID').inTable('models');

        table.integer('ID').primary();
        table.string('Name').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('versions');
};
