(function () {
    "use strict";

    desc("Default task");
    task("default", ["version"], function () {
        console.log("\n\nBUILD OK");
    });

    desc("Check Node Version");
    task("version", function () {
        console.log("Checking Node version: .");
        const packageJson = require("./package.json")
        const expectedVersion = "v" + packageJson.engines.node;
        const actualVersion = process.version;
        if (actualVersion !== expectedVersion)
            fail("Incorrect Node version: Expected " + expectedVersion + ", but was " + actualVersion)
    });

}());