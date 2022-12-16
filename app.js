const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/transaction", require("./routes/transactionRoutes"));

module.exports = app;
