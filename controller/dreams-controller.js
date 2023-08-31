const knex = require("knex")(require("../knexfile"));

const add = (req, res) => {
  const { dream_name, description, category } =
    req.body;
   
  let newDream = {
    dream_name,
    description,
    category
  };
  if (
    dream_name === undefined
  ) {
    return res.status(400).json("Please write a name of your dream");
  }

        knex("dreams")
          .insert(newDream)
          .then((result) => {
           return knex("dreams")
            .select("*")
            .then((dream) => {
                res.status(201).json(dream);
            });
          })
      
          .catch((err) => res.status(500).json(`Unable to create a dream`));
      };


module.exports = {
  add
};
