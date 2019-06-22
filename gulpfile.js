(function() {
  "use strict";

  var semver = require("semver");
  var src = require("gulp").src;
  var dest = require("gulp").dest;
  var series = require("gulp").series;
  var eslint = require("gulp-eslint");
  var gulpIf = require("gulp-if");

  function version(done) {
    console.log("Checking Node version:");
    var packageJson = require("./package.json");
    var expectedVersion = packageJson.engines.node;
    var actualVersion = process.version;
    done(semver.neq(expectedVersion, actualVersion));
  }

  function lint() {
    console.log("ESLint/Prettier-ing JavaScript:");
    return src(["./gulpfile.js"])
      .pipe(eslint({ fix: true }))
      .pipe(eslint.format())
      .pipe(gulpIf(isFixed, dest("./")));
  }

  function isFixed(file) {
    return file.eslint != null && file.eslint.fixed;
  }

  function build(done) {
    console.log("\n\nBUILD OK");
    done();
  }

  exports.default = series(version, lint, build);
})();
