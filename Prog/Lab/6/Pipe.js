const pipe = (...arg) => {
    functionArray = [];
    
    for(i in arg) {
        if(typeof(arg[i]) === "number") console.error(`error ${arg[i]} is not a Function`);
        else functionArray.push(arg[i]);  
    }
    
    const functionUse = (num) => {
        if(typeof(num) != "number"){
            console.error(`error ${num} is not a Number`);
            return NaN;
        }

        let res = num;
        for(func of functionArray) res = func(res);
        
        return res;
    }
    return functionUse;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);

console.log(f(5));  