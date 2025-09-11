'use strict';

const average = (a, b) => (a+b)/2;
const square = (x) => x**2;
const cube = (x) => x**3;

const calculate = () => {
    let array = [];
    for(let i = 0; i <= 9; i++){
        array[i] = average(square(i), cube(i));
    }
    return array;
}

const res = calculate();
console.dir({res});

