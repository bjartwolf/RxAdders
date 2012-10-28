var HalfAdder = require('./half-adder.js');
var Rx = require('rx');
var orDelay = 10;
var periodInMs = 1000;
// Creating the A and B signals as observable sequences
var A = Rx.Observable.interval(periodInMs).select(function () { return true ;});
var B = Rx.Observable.interval(periodInMs).select(function () { return false;});
var Cin = Rx.Observable.interval(periodInMs).select(function () { return true ;}); 

var halfAdder1 = new HalfAdder(B, Cin);
var halfAdder2 = new HalfAdder(A, halfAdder1.S);
var C = halfAdder2.C.zip(halfAdder1.S, function (valueA, valueB) {
    return valueA || valueB;
}).delay(orDelay);

var S = halfAdder2.S;

C.subscribe(function (val) {
    console.log("C: " + val);
});
S.subscribe(function (val) {
    console.log("S: " + val);
});
