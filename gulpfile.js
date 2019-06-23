(function () {
    "use strict";

    const {series} = require('gulp');
    const semver = require("semver");

    function build(done) {
        console.log("\n\nBUILD OK");
        done();
    }

    function version(done) {
        console.log("Checking Node version: .");
        const packageJson = require("./package.json");
        const expectedVersion = packageJson.engines.node;
        const actualVersion = process.version;
        done(semver.neq(expectedVersion, actualVersion));
    }

    exports.default = series(version, build);

}());