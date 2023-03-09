class StreamType {
  constructor(cost) {
    if (this.constructor == StreamType) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.cost = cost;
    this.totalInvest = 0;
    this.balance = 0;
    this.numOfAd = 0;
  }

  deductCost() {
    return Number((this.balance - this.cost).toFixed(2));
  }

}

module.exports = StreamType;
