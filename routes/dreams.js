const router = require("express").Router();
const dream = require("../controller/dreams-controller");

router.route("/")
    .get(dream.getAll)
    .post(dream.add);

router.route('/:id')
    .get(dream.getDream)
    .delete(dream.dlt)
    .put(dream.edit)
    
// router.route('/:id/:ask')

module.exports = router;