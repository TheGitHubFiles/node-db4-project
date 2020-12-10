
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step_num: 1, recipe_id: 1, ING_id: 1, step_text: 'Boil noodles in water', qty: 1 },
        { step_num: 2, recipe_id: 1, ING_id: 3, step_text: 'Strain water, add cheese', qty: 2 },
        { step_num: 3, recipe_id: 1, ING_id: 2, step_text: 'Add milk and stir', qty: 1 },
        { step_num: 1, recipe_id: 2, ING_id: 4, step_text: 'Set out 2 pieces of bread', qty: 2 },
        { step_num: 2, recipe_id: 2, ING_id: 5, step_text: 'Slather 1 piece of bread with peanut butter', qty: 1 },
        { step_num: 3, recipe_id: 2, ING_id: 6, step_text: 'Slather other piece of bread with jelly and CONSUME', qty: 1 },
        { step_num: 1, recipe_id: 3, ING_id: 4, step_text: 'Heat stove and place bread in a pan on said stove', qty: 2 },
        { step_num: 2, recipe_id: 3, ING_id: 3, step_text: 'grate cheese on heated bread, heat until melted. ENJOY.', qty: 2 },
      ]);
    });
};





