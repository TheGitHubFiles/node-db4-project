const db = require('../../data/db-config')

function getRecipes() {
    return db('recipes')

}
function getShoppingList(recipe_id) {
    return db('recipes as r')
        .join('steps as s', 'r.recipe_id', 's.recipe_id')
        .join('ingredients as i', 'i.ingredient_id', 's.ING_ID')
        .select('i.ingredient_name', 's.qty')
        .where('s.recipe_id', recipe_id)
}
function getInstructions(recipe_id) {
    return db('steps as s')
        .select('s.step_text', 's.step_num')
        .where('s.recipe_id', recipe_id)
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}