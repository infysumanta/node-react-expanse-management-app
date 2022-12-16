const Transaction = require("./../models/transaction.schema");
const moment = require("moment");

exports.getAllTransaction = async (req, res) => {
  const { userId, frequency, selectDate, type } = req.body;
  try {
    const transaction = await Transaction.find({
      ...(frequency !== "custom"
        ? { date: { $gt: moment().subtract(Number(frequency), "d").toDate() } }
        : {
            date: { $gte: selectDate[0], $lte: selectDate[1] },
          }),
      userId: userId,
      ...(type !== "all" && { type }),
    });
    res.status(200).send(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.addTransaction = async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.status(201).send("Transaction Cretated");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.editTransaction = async (req, res) => {
  try {
    await Transaction.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.status(201).send("Transaction Updated");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.deleteTransaction = async (req, res) => {
  console.log(req.body);
  try {
    const deleted = await Transaction.findOneAndDelete({
      _id: req.body.transactionId,
    });
    res.status(201).send("Transaction Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
