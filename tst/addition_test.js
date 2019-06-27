(function() {
  "use strict";

  const addition = require("../src/addition.js");
  const assert = require("./assert.js");

  describe("Addition", function() {
    it("adds positive numbers", function() {
      assert(addition.add(3, 4), 7);
    });
  });
})();
