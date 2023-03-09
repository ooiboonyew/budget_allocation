const StreamType = require("./StreamType");

class VideoOnDemand extends StreamType {
  constructor() {
    var cost = 2000;
    super(cost);
  }

  deductCost() {
    var setupCost = 100;
    return Number((this.balance - this.cost - setupCost).toFixed(2));
  }
}

module.exports = VideoOnDemand;
