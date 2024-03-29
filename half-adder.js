var Rx = require('rx');
// Period for generating input observables
// delays to simulate delay in digital circuits
var orDelay = 10;
var invDelay = 50;
var andDelay = 20;

var HalfAdder  = function HalfAdder (A,B) {
    // Calculating the signal D as A OR B
    var D = Rx.Observable.merge(null, [A, B], function (valueA, valueB) {
        return valueA || valueB;
    }).delay(orDelay);

    // Calculating the carry signal (C) as A AND B
    var C = Rx.Observable.merge(null, [A, B], function (valueA, valueB) {
        return valueA && valueB;
    }).delay(andDelay);

    // Calculating the signal E as the inverse of D
    var E = D.delay(orDelay).select(function (val) {
        return !val; 
    }).delay(invDelay);

    // Calculating the sum as D AND E
    var S = Rx.Observable.merge(null, [D, E], function (valueA, valueB) {
        return valueA && valueB;
    }).delay(andDelay);
    return { S: S, C: C};
}
module.exports = HalfAdder;
