// Not a finished ripplecarrier yet
var fullAdder = require('./adder.js');
var Rx = require('rx');
var orDelay = 10;
var periodInMs = 3000;
// Creating the A and B signals as observable sequences
var timer  = Rx.Observable.interval(periodInMs);
var A1 = timer.zip(Rx.Observable.fromArray([false, false, true, true]), function (timer, arrayItem) {return arrayItem;});
var A2 = timer.zip(Rx.Observable.fromArray([false, false, true, true]), function (timer, arrayItem) {return arrayItem;});
var A3 = timer.zip(Rx.Observable.fromArray([false, false, true, true]), function (timer, arrayItem) {return arrayItem;});
var B1 = timer.zip(Rx.Observable.fromArray([false, true, false, true]), function (timer, arrayItem) {return arrayItem;});
var B2 = timer.zip(Rx.Observable.fromArray([false, true, false, true]), function (timer, arrayItem) {return arrayItem;});
var B3 = timer.zip(Rx.Observable.fromArray([false, true, false, true]), function (timer, arrayItem) {return arrayItem;});
var Cin = timer.zip(Rx.Observable.fromArray([false, false, false, false]), function (timer, arrayItem) {return arrayItem;});

var FA1 = new fullAdder(A1, B1, Cin); 
var FA2 = new fullAdder(A2, B2, FA1.C); 
var FA3 = new fullAdder(A3, B3, FA2.C); 

FA1.S.subscribe(function (val) {
    console.log("S1: " + val);
});
FA2.S.subscribe(function (val) {
    console.log("S2: " + val);
});
FA3.S.subscribe(function (val) {
    console.log("S3: " + val);
});
