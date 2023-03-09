const StreamType = require("./StreamType");

class TvLinear extends StreamType {

  constructor() {
    var cost = 5000;
    super(cost);
  }
}

module.exports = TvLinear;
