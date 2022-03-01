const mongoose = require ("mongoose")
const Schema = mongoose.Schema
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },

    price: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    },
 
  }
);
const Item = mongoose.model("Item", itemSchema);
module.exports = Item;