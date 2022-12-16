const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transactionController");
const router = express.Router();

router.route("/add-transaction").post(addTransaction);
router.route("/get-transaction").post(getAllTransaction);
module.exports = router;
