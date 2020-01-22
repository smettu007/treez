const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 10
    },
    description: {
      type: String,
      minlength: 3,
      maxlength: 500
    },
    price: {
      type: Number,
      min: 0
    },
    quantity: {
      type: Number,
      min: 0
    }
  },
  {
    versionKey: false // You should be aware of the outcome after set to false
  }
);
const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;
