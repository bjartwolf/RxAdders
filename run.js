var HalfAdder = require('./half-adder.js');
var Rx = require('rx');
var periodInMs = 1000;
// Creating the A and B signals as observable sequences
var A = Rx.Observable.interval(periodInMs).select(function () { return true ;});
var B = Rx.Observable.interval(periodInMs).select(function () { return true ;}); 
var halfAdder = new HalfAdder(A, B);
var S = halfAdder.S;
var C = halfAdder.C;

C.subscribe(function (val) {
    console.log(val);
});
S.subscribe(function (val) {
    console.log(val);
});
