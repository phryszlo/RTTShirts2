const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Each user must have a name"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is a required field"],
      unique: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);


const User = mongoose.model("Cart", userSchema);

module.exports = Cart;


