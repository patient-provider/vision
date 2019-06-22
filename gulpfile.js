(function() {
  "use strict";

  var series = require("gulp").series;
  var semver = require("semver");

  function version(done) {
    console.log("Checking Node version: .");
    var packageJson = require("./package.json");
    var expectedVersion = packageJson.engines.node;
    var actualVersion = process.version;
    done(semver.neq(expectedVersion, actualVersion));
  }

  function build(done) {
    console.log("\n\nBUILD OK");
    done();
  }

  exports.default = series(version, build);
})();
