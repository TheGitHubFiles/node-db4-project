
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'noodles' },
        { ingredient_name: 'Milk' },
        { ingredient_name: 'Cheese' },
        { ingredient_name: 'Bread' },
        { ingredient_name: 'PeanutButter' },
        { ingredient_name: 'Jelly' }
      ]);
    });
};