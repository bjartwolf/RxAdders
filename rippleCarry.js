// Not a finished ripplecarrier yet
var fullAdder = require('./adder.js');
var Rx = require('rx');
var orDelay = 10;
var periodInMs = 1000;
// Creating the A and B signals as observable sequences
var A = Rx.Observable.fromArray([true, false, true, true]);
var B = Rx.Observable.fromArray([true, true, false, true]);
var Cin = Rx.Observable.fromArray([false, false, false, false]);

var fullAdder = new fullAdder(A, B, Cin); 

fullAdder.C.subscribe(function (val) {
    console.log("C: " + val);
});
fullAdder.S.subscribe(function (val) {
    console.log("S: " + val);
});
