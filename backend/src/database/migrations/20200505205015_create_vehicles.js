exports.up = function(knex) {
    return knex.schema.createTable('vehicles', function(table) {
        table.integer('ID').primary();
        table.string('Make').notNullable();
        table.string('Model').notNullable();
        table.string('Version').notNullable();
        table.string('Image').notNullable();
        table.integer('KM');
        table.string('Price').notNullable();
        table.integer('YearModel', 4).notNullable();
        table.integer('YearFab', 4).notNullable();
        table.string('Color').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('vehicles');
};
