const mongoose = require("mongoose");
const { isEmail } =  require('validator');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    email: {
      type: String,
      validate: [ isEmail, 'invalid email' ],
      minlength: 3,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    inventory: {
      type: [Object],
      required: true,
    }
  },
  {
    versionKey: false
  }
);
const Inventory = mongoose.model("Orders", OrderSchema);

module.exports = Inventory;
