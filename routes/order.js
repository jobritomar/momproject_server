const router = require("express").Router();

const controllers = require("../controllers/order");

router
  .post("/new", controllers.new)
  .get("/", controllers.index)
  .get("/mine",controllers.listMyOrders)
  .get("/:id", controllers.get)
  .post("/:id/edit", controllers.edit)
  .post("/:id/delete", controllers.delete)
  

module.exports = router;