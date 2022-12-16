import { Progress } from "antd";
import React from "react";

const Charts = ({ allTransaction }) => {
  const totalTransaction = allTransaction.length;
  const totalIncomeTransaction = allTransaction.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransaction = allTransaction.filter(
    (transaction) => transaction.type === "expense"
  );
  const totalIncomePersent =
    (totalIncomeTransaction.length / totalTransaction) * 100;
  const totalExpensePersent =
    (totalExpenseTransaction.length / totalTransaction) * 100;

  const totalTurnover = allTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncomeTurnover = totalIncomeTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalExpenseTurnover = totalExpenseTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnoverPercent =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverPercent =
    (totalExpenseTurnover / totalTurnover) * 100;

  const categories = [
    "salary",
    "tip",
    "project",
    "food",
    "movie",
    "bills",
    "medical",
    "fee",
    "tax",
  ];

  return (
    <>
      <div className="row m-2">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Total Transaction : {totalTransaction}
            </div>
            <div className="card-body">
              <h5 className="text-success">
                Income: {totalIncomeTransaction.length}
              </h5>
              <h5 className="text-danger">
                Expense: {totalExpenseTransaction.length}
              </h5>
              <div>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomePersent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalExpensePersent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Total TurnOver : {totalTurnover}</div>
            <div className="card-body">
              <h5 className="text-success">Income: {totalIncomeTurnover}</h5>
              <h5 className="text-danger">Expense: {totalExpenseTurnover}</h5>
              <div>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomeTurnoverPercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalExpenseTurnoverPercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-2">
        <div className="col-md-6">
          <h4>Category Wise Income</h4>
          {categories.map((category, index) => {
            const amount = allTransaction
              .filter(
                (transaction) =>
                  transaction.type === "income" &&
                  transaction.category === category
              )
              .reduce((acc, transaction) => acc + transaction.amount, 0);

            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <h5>{category}</h5>
                  <Progress
                    percent={((amount / totalIncomeTurnover) * 100).toFixed(0)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-6">
          <h4>Category Wise Expense</h4>
          {categories.map((category, index) => {
            const amount = allTransaction
              .filter(
                (transaction) =>
                  transaction.type === "expense" &&
                  transaction.category === category
              )
              .reduce((acc, transaction) => acc + transaction.amount, 0);

            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <h5>{category.toUpperCase()}</h5>
                  <Progress
                    percent={((amount / totalExpenseTurnover) * 100).toFixed(0)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Charts;
