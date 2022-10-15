/// <reference path="interfaces.ts" />
var Functions;
(function (Functions) {
    function sum(build) {
        var result = build.a + build.b;
        return result;
    }
    Functions.sum = sum;
})(Functions || (Functions = {}));
/// <reference path="interfaces.ts" />
/// <reference path="functions.ts" />
var result = Functions.sum({ a: 22, b: 44 });
console.log("From file 'main--outFile:' ", result);
