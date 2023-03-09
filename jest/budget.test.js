const BudgetController = require("../controllers/budgetController");
const budgetController = new BudgetController();

//npm test -- --coverage
//npm run test
describe("budgetController.budgetAllocation()", () => {
  test("Success Case - 2 Stream", async () => {
    var budgetAmount = 100000;
    var result = await budgetController.budgetAllocation(budgetAmount);
    console.log(result);
    result.forEach((element) => {
      expect(element.balance).toBeLessThan(element.totalInvest * 0.05);
    });
  });

  test("Failed Case - Zero Budget Amount", async () => {
    try {
      var budgetAmount = 0;
      var videoOnDemand = new VideoOnDemand();
      var tvLinear = new TvLinear();

      var streamTypeList = [tvLinear, videoOnDemand];
      var result = await budgetController.budgetAllocation(budgetAmount, streamTypeList);

      result.forEach((element) => {
        expect(element.balance).toBeLessThan(element.totalInvest * 0.05);
      });
    } catch (e) {
      expect(e.message).toBe("Budget Amount Must Greater Than 0.");
    }
  });

  test("Failed Case - use Abstract Stream", async () => {
    try {
      var budgetAmount = 0;
      var stream = new StreamType();
      var tvLinear = new TvLinear();

      var streamTypeList = [tvLinear, videoOnDemand];
      var result = await budgetController.budgetAllocation(budgetAmount, streamTypeList);

      result.forEach((element) => {
        expect(element.balance).toBeLessThan(element.totalInvest * 0.05);
      });
    } catch (e) {
      expect(e.message).toBe("Abstract classes can't be instantiated.");
    }
  });
});
