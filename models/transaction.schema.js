const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Amount is Required"],
    },
    type: {
      type: String,
      required: [true, "Type is Required"],
    },
    category: {
      type: String,
      required: [true, "Category is Required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Description is Required"],
    },
    date: {
      type: Date,
      required: [true, "Date is Required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
