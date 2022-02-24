const router = require("express").Router();

const controllers = require("../controllers/order");

router
  .post("/new", controllers.new)
  .get("/", controllers.index)

module.exports = router;