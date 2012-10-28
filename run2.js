var fullAdder = require('./adder.js');
var Rx = require('rx');
var orDelay = 10;
var periodInMs = 1000;
// Creating the A and B signals as observable sequences
var A = Rx.Observable.interval(periodInMs).select(function () { return true ;});
var B = Rx.Observable.interval(periodInMs).select(function () { return false;});
var Cin = Rx.Observable.interval(periodInMs).select(function () { return true ;}); 

var fullAdder = new fullAdder(A, B, Cin); 

fullAdder.C.subscribe(function (val) {
    console.log("C: " + val);
});
fullAdder.S.subscribe(function (val) {
    console.log("S: " + val);
});
