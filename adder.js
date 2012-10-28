var HalfAdder = require('./half-adder.js');
var Rx = require('rx');
var periodInMs = 1000;
// Creating the A and B signals as observable sequences
var A = Rx.Observable.interval(periodInMs).select(function () { return true ;});
var B = Rx.Observable.interval(periodInMs).select(function () { return false;});
var Cin = Rx.Observable.interval(periodInMs).select(function () { return true ;}); 
var halfAdder1 = new HalfAdder(B, Cin);
var halfAdder2 = new HalfAdder(A, halfAdder1.S);
var S = halfAdder2.S;
var C = halfAdder2.C;

C.subscribe(function (val) {
    console.log(val);
});
S.subscribe(function (val) {
    console.log(val);
});
