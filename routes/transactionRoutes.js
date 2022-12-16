const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");
const router = express.Router();

router.route("/add-transaction").post(addTransaction);
router.route("/get-transaction").post(getAllTransaction);
router.route("/edit-transaction").put(editTransaction);
router.route("/delete-transaction").post(deleteTransaction);
module.exports = router;
