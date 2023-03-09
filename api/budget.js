const express = require("express");
const cors = require("cors");
const budgetApp = express();

budgetApp.use(cors({ origin: true }));



budgetApp.use(addResponseHeader);
budgetApp.use(verifyApiKey);

budgetApp.get("/budgetAllocation", async (req, res, next) => {
  try {
    const careers = await budgetController.budgetAllocation(20000);
    return res.status(200).json(careers);
  } catch (error) {
    adeErrorHandler(error, req, res, next);
  }
});

module.exports = {
  budgetApp
}

// exports.career = functions.region("asia-southeast2").https.onRequest(budgetApp);
