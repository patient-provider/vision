(function () {
    "use strict";

    const semver = require("semver");

    desc("Default task");
    task("default", ["version"], function () {
        console.log("\n\nBUILD OK");
    });

    desc("Check Node Version");
    task("version", function () {
        console.log("Checking Node version: .");
        const packageJson = require("./package.json")
        const expectedVersion = packageJson.engines.node;
        const actualVersion = process.version;
        if (semver.neq(expectedVersion, actualVersion))
            fail("Incorrect Node version: Expected " + expectedVersion + ", but was " + actualVersion)
    });

}());