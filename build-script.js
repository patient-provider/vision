(function() {
  "use strict";

  exports.version = () => {
    const semver = require("semver");
    const expectedVersion = require("./package.json").engines.node;
    const actualVersion = process.version;

    console.log("Checking Node version: .");
    semver.neq(expectedVersion, actualVersion);
  };

  exports.clean = () => {
    const shelljs = require("shelljs");
    console.log("Cleaning distribution directory: .");
    shelljs.rm("-rf", "dist");
  };
})();
