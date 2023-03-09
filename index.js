var express = require("express");
var app = express();
const BudgetController = require("./controllers/budgetController");

app.get("/budgetAllocation/:budgetAmount", async (req, res) => {
  try {
    const budgetAmount = req.params.budgetAmount;
    const budgetController = new BudgetController();

    const result = await budgetController.budgetAllocation(budgetAmount);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send(error.message)
  }
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
