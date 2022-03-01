const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    info: [{
      _id: {type: mongoose.Schema.Types.ObjectId, ref: "Item"},
      quantity: {
        type: Number,
        required: true,
        },
      
      }
    ],
    status: {
      type: String,
      enum: {
        values: [
          "pending",
          "in_progess",
          "completed"
        ]
      }
    }
  
});

module.exports = mongoose.model("Order", orderSchema);