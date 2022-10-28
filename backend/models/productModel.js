const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Each product must have a name"],
    },
    description: {
      type: String,
      required: [true, "Description is a required field"],
    },
    price: {
      type: Number,
      required: [true, "Price is a required field"] ,
    },
    image: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);


const User = mongoose.model("Cart", userSchema);

module.exports = Cart;


