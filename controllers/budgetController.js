const BudgetValidation = require("../common/budgetValidation");
const TvLinear = require("../entities/tvLinear");
const VideoOnDemand = require("../entities/videoOnDemand");

class BudgetController {
  async budgetAllocation(budgetAmount) {
    try {
      var videoOnDemand = new VideoOnDemand();
      var tvLinear = new TvLinear();
      var streamTypeList = [tvLinear, videoOnDemand];

      const budgetValidation = new BudgetValidation();
      budgetValidation.validateBudge(budgetAmount);

      //Devide the Budget to all Stream
      streamTypeList.forEach((streamType) => {
        streamType.totalInvest = Number((budgetAmount / streamTypeList.length).toFixed(2));
        streamType.balance = Number(streamType.totalInvest.toFixed(2));
      });

      var finishBudget = false;

      while (!finishBudget) {
        for (let index = 0; index < streamTypeList.length; index++) {
          const streamType = streamTypeList[index];

          //Check Balance can deduct the cost or not
          if (streamType.balance - streamType.cost >= 0) {
           
            streamType.balance = streamType.deductCost();
            streamType.numOfAd += 1;

            //check balance is less than 5%
            //if less than 5%, sum all balance more than 5% and equal balance to all of them.
            if (streamType.balance < streamType.totalInvest * 0.05) {
              var filtered = streamTypeList.filter((x) => x.balance > streamType.totalInvest * 0.05);
              var totalBalance = filtered.map((item) => item.balance).reduce((prev, curr) => prev + curr, 0);
              var equalBalance = Number((totalBalance / filtered.length).toFixed(2));

              filtered.forEach((streamType) => {
                streamType.balance = Number(equalBalance.toFixed(2));
              });
            }
          } else {
            //continue deduct for others stream
            if (streamTypeList.some((x) => x.balance - x.cost >= 0)) {
              continue;
            } else {
              //if all balance not enough to deduct cost, stop proccess
              finishBudget = true;
            }
          }
        }
      }
      return streamTypeList;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = BudgetController;
