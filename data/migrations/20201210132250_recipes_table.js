
exports.up = function (knex) {
    return knex.schema.createTable('recipes', table => {
        table.increments("recipe_id")
        table.string("recipe_name", 128).notNullable
    })
        .createTable('ingredients', table => {
            table.increments("ingredient_id")
            table.string("ingredient_name", 128).notNullable
        })
        .createTable('steps', table => {
            table.increments("step_id")
            table.integer("recipe_id").notNullable().references("recipe_id").inTable('recipes').onDelete('RESTRICT').onUpdate("RESTRICT")
            table.integer("step_num").notNullable()
            table.string('step_text', 300).notNullable()
            table.integer('ING_ID').notNullable().references('ingredient_id').inTable("ingredients").onDelete('RESTRICT').onUpdate("RESTRICT")
            table.integer('QTY').notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropIfTableExists('steps')
        .dropIfTableExists('ingredients')
        .dropIfTableExists('recipes')
};
