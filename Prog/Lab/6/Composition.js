"use strict";

const composition = (...arg) => {
    const functionArray = [];
    const errorFunc = [];
    for(const i of arg) {
        functionArray.push(i);  
    }
    const functionUse = (num) => {
        try{
            let res = num, counter = functionArray.length - 1;
            while(counter >= 0) {
                res = functionArray[counter](res);
                counter--;
            }
            return res;
        }
        catch (error) {
            for(const counter of errorFunc){
                counter(error);
            }
            return undefined;
        }
    }   
    
    functionUse.on = (name, e) => {
        if(name == "error") {
            errorFunc.push(e);
        }
    }
    return functionUse;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const error = x => {throw new Error ("Study error")};

const f = composition(error, inc, twice, cube);

f.on('error', e => {
    console.log("Error catched:", e.name);
    console.log("Text:", e.message);
});


console.log(f(5));


