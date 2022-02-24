const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    info: [{
      _id: {type: mongoose.Schema.Types.ObjectId, ref: "Item"},
      quantity: {
        type: Number,
        required: true,
        }
      }
    ],
  
});

module.exports = mongoose.model("Order", orderSchema);