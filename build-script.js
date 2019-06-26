(function() {
  "use strict";

  exports.version = () => {
    const semver = require("semver");
    const expectedVersion = require("./package.json").engines.node;
    const actualVersion = process.version;

    console.log("Checking Node version: .");
    semver.neq(expectedVersion, actualVersion);
  };

  exports.clean = (directory) => {
    console.log("Deleting '" + directory + "/': .");
  };
})();