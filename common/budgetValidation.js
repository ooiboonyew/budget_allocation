class BudgetValidation {
  validateBudge(budgetAmount) {
    if (budgetAmount <= 0) {
      throw new Error("Budget Amount Must Greater Than 0.");
    }
  }
}

module.exports = BudgetValidation;
