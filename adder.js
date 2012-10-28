var Rx = require('rx');
// Period for generating input observables
var periodInMs = 1000;
// delays to simulate delay in digital circuits
var orDelay = 10;
var invDelay = 50;
var andDelay = 20;

// Creating the A and B signals as observable sequences
var A = Rx.Observable.interval(periodInMs).select(function () { return true ;});
var B = Rx.Observable.interval(periodInMs).select(function () { return true ;});

// Calculating the signal D as A OR B
var D = A.zip(B, function (valueA, valueB) {
    return valueA || valueB;
}).delay(orDelay);

// Calculating the carry signal (C) as A AND B
var C = A.zip(B, function (valueA, valueB) {
    return valueA && valueB;
}).delay(andDelay);

// Calculating the signal E as the inverse of D
var E = D.delay(orDelay).select(function (val) {
    return !val; 
}).delay(invDelay);

// Calculating the sum as D AND E
var S = D.zip(E, function (valueA, valueB) {
    return valueA && valueB;
}).delay(orDelay);

S.subscribe(function (val) {
    console.log('S: ' + val);
});

D.subscribe(function (val) {
    console.log('D-OR: ' + val);
});

E.subscribe(function (val) {
    console.log('E-INV: ' + val);
});
