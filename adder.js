var HalfAdder = require('./half-adder.js');
var Rx = require('rx');
var orDelay = 10;
var periodInMs = 1000;
var FullAdder = function FullAdder(A, B, Cin) {
    var halfAdder1 = new HalfAdder(B, Cin);
    var halfAdder2 = new HalfAdder(A, halfAdder1.S);
    var C = Rx.Observable.merge(null, [halfAdder2.C, halfAdder1.S], function (valueA, valueB) {
        return valueA || valueB;
    }).delay(orDelay);
    var S = halfAdder2.S;
    var Cout = C;
    return {S: halfAdder2.S, C: Cout};
};
module.exports = FullAdder;
