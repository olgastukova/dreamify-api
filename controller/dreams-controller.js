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

      const getDream = (req, res) => {
        knex("dreams")
          .select(
            "dreams.id",
            "dreams.dream_name",
            "dreams.description",
            "dreams.category"
          )
          .where({ "dreams.id": req.params.id })
          .then((dream) => {
            if (dream.length === 0) {
              return res.status(404).send("ID not found");
            }
            res.status(200).json(dream);
          });
      };
      const getAll = (req, res) => {
        knex("dreams")
          .select(
            "dreams.id",
            "dreams.dream_name",
            "dreams.description",
            "dreams.category"
          )
          .then((dreams) => {
            res.status(200).json(dreams);
          })
          .catch(() => {
            res.status(500).send("error");
          });
      };
module.exports = {
  add,
  getDream,
  getAll
};

