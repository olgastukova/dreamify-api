/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {

  knex('dreams').del()
  knex('dreams').insert([
   {
    id:1,
    dream_name: 'Visit Paris',
    description: 'Dream city! Get to the top of Eiffel Tower, feel the beauty of Notre-Dame and enjoy cancan in Moulin Rouge!',
    category: 'travel',
    isDone: false,
    image: 'http://localhost:8080/paris'
   }
  ]);
};
