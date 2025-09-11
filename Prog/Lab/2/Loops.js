'use strict';

function range(start, end){
    let array = [];
    for(let i = 0; i < end-start + 1; i++){
        array[i]=i+start;
    }
    return array;
}
let res = range(15,30);
console.dir({res});

function rangeOdd(start, end){
    let array = [];
    for(let i = start; i <= end; i+=2){
        array.push(i);
    }
    return array;
}
res = rangeOdd(15,30);
console.dir({res});