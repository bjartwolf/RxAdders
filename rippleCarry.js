// Not a finished ripplecarrier yet
var fullAdder = require('./adder.js');
var Rx = require('rx');
var orDelay = 10;
var periodInMs = 3000;
// Creating the A and B signals as observable sequences
var timer  = Rx.Observable.interval(periodInMs);
var A = timer.zip(Rx.Observable.fromArray([false, false, true, true]), function (timer, arrayItem) {return arrayItem;});
var B = timer.zip(Rx.Observable.fromArray([false, true, false, true]), function (timer, arrayItem) {return arrayItem;});
var Cin = timer.zip(Rx.Observable.fromArray([false, true, false, true]), function (timer, arrayItem) {return arrayItem;});

var fullAdder = new fullAdder(A, B, Cin); 

fullAdder.C.delay(10).subscribe(function (val) {
    console.log("C: " + val);
});
fullAdder.S.subscribe(function (val) {
    console.log("S: " + val);
});
