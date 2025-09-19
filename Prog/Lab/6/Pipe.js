'use strict';   

const pipe = (...arg) => {
    const functionArray = [];
    
    for(const i in arg) {
        if(typeof(arg[i]) != "function") console.error(`error ${arg[i]} is not a Function`);
        else functionArray.push(arg[i]);  
    }
    
    const functionUse = (num) => {
        if(typeof(num) != "number"){
            console.error(`Error ${num} is not a Number`);
            return NaN;
        }

        let res = num;
        for(const func of functionArray) res = func(res);
        
        return res;
    }
    return functionUse;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const res = pipe(inc, twice, cube);

console.log(`Result: ${res(5)}`);  