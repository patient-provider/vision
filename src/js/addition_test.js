(function() {
  "use strict";

  const addition = require("./addition.js");

  describe("Addition", function() {
    it("adds positive numbers", function() {
      assertEqual(addition.add(3, 4), 7);
    });

    function assertEqual(actual, expected) {
      if (actual !== expected)
        throw new Error("expected " + expected + ", but was " + actual);
    }
  });
})();
