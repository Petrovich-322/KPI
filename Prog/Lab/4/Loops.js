'use strict';

let func = function sum () {
    //console.dir({arguments});
    let sum = 0;
    for(const i in arguments) sum += arguments[i];
    return sum;
}

const a = func(1,2,3);
console.log(a);


func = function sum () {
    let sum = 0;
    for(const i of arguments) sum += i;
    return sum;
}

const b = func(0);
console.log(b);

func = function sum () {
    let sum = 0, i = arguments.length - 1;
    while(i >= 0) {
        sum += arguments[i];
        i--;
    }
    return sum;
}

const c = func();
console.log(c);

func = function sum () {
    let sum = 0, i = arguments.length - 1;
    if(arguments[i] != undefined){
        do {
            sum += arguments[i];
            i--;
        } 
        while(i >= 0);
    }
    return sum;    
}

const d = func(1, -1, 1);
console.log(d);

func = function sum (...arg) {
    //console.dir({arg})
    const sum = arg.reduce((sum, num) => sum + num, 0);
    return sum;   
}

const e = func(10, -1, -1, -1);
console.log(e);