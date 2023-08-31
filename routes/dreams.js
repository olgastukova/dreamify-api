const router = require("express").Router();
const dream = require("../controller/dreams-controller");

// router.route('/dreams/:id')
//     .get(dream.getOne)
//     .delete(dream.dlt)
//     .put(dream.edit)
    
    router.route("/")
    // .get(dream.getAll)
    .post(dream.add);

module.exports = router;