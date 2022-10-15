"use strict";
/// <reference path="interfaces.js" />
var Functions;
(function (Functions) {
    function sum(build) {
        let result = build.a + build.b;
        return result;
    }
    Functions.sum = sum;
})(Functions || (Functions = {}));
