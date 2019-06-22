(function () {
    "use strict";

    const {series} = require('gulp');

    function build(done) {
        console.log("\n\nBUILD OK");
        done();
    }

    exports.default = series(build);

}());