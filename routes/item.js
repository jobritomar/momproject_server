const router = require("express").Router();

const fileUploader = require('../config/cloudinary').single("image");

const {
  allItems,
  createItem,
  updateItem,
  deleteItem
} = require("../controllers/item");

router
  .get("/", allItems)
  .post("/new", fileUploader, createItem)
  .post("/:id/edit", fileUploader, updateItem)
  .post("/:id/delete", deleteItem)

module.exports = router;