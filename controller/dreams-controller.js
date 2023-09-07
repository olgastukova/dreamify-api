const knex = require("knex")(require("../knexfile"));

const add = (req, res) => {
  const { dream_name, description, category, isDone, image } = req.body;

  let newDream = {
    dream_name,
    description,
    category,
    isDone,
    image,
  };

  if (dream_name === undefined) {
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
      "dreams.category",
      "dreams.isDone",
      "dreams.image"
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
      "dreams.category",
      "dreams.isDone",
      "dreams.image"
    )
    .then((dreams) => {
      res.status(200).json(dreams);
    })
    .catch(() => {
      res.status(500).send("error");
    });
};
const dlt = (req, res) => {
  const { id } = req.params;
  if (!id) res.status(400).res.json("Please provide an Id");

  knex("dreams")
    .where({ id: id })
    .del()
    .then((response) => {
      if (!response) {
        return res
          .status(400)
          .json({ message: `Item with ID: ${id} to be deleted not found.` });
      }
      res.status(200).send("Item deleted");
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to delete item" });
    });
};

const edit = (req, res) => {
  const { dream_name, description, category, isDone, image } = req.body;
  const newDreamInfo = {
    dream_name,
    description,
    category,
    isDone,
    image,
  };
  if (!dream_name) {
    return res.status(400).json("Please write your dream name");
  }
  console.log();
  knex("dreams")
    .where({ id: req.params.id })
    .then((dream) => {
      if (!dream.length) {
        res.status(404).json("Dream not found");
      } else {
        knex("dreams")
          .where({ id: req.params.id })
          .update(newDreamInfo)
          .then(() => {
            return knex("dreams").where({
              id: req.params.id,
            });
          })
          .then((updatedDream) => res.json(updatedDream[0]))
          .catch(() =>
            res
              .status(500)
              .json(`Unable to update dream with id ${req.params.id}`)
          );
      }
    });
};

module.exports = {
  add,
  getDream,
  getAll,
  dlt,
  edit,
};
