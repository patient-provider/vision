(function() {
  "use strict";

  const addition = require("../src/addition.js");
  const assert = require("chai").assert;

  describe("Addition", function() {
    it("adds positive numbers", function() {
      assert(addition.add(3, 4), 7);
    });
  });
})();
