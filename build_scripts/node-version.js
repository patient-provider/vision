(function () {
    "use strict";

    const semver = require("semver");
    const expectedVersion = require("../package.json").engines.node;
    const actualVersion = process.version;

    console.log("Checking Node version: .");
    semver.neq(expectedVersion, actualVersion);

}());