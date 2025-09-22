"use strict";

const contract = (func, ...arg) => {
    const array = arg;
    let res = undefined;
    
    const finalFunc = (...arg) => {
        try{
            if(arg.length != array.length - 1)throw new Error("Not enough type elements");
            
            for(const i in arg){
                let check = array[i].name;
                check = check.toLowerCase();
                if(typeof(arg[i]) != check)throw new TypeError("Incorrect type");
            }
            res = arg.reduce((result, data) => func(result, data));
            
            let check = array[array.length - 1].name;
            check = check.toLowerCase();
            if(typeof(res) != check){
                res = undefined;
                throw new TypeError("Incorrect result type");
            }
        }
        catch(error){
            console.log(error.message);
        }
        
        return res;
        
    }
    
    return finalFunc;
}


const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number, Number, Number, Number, Number);
let res = addNumbers(2, 3, 5, 6, 9, 0);
console.dir(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
res = concatStrings('Hello ', 'world!');
console.dir(res); // Output: Hello world!




// for(const i of arg){
//         const length = arg.length - 1
//         try{
//             if(i.name != arg[length].name)throw new TypeError("Study typeError");
//             console.log(i);
//         }
//         catch(error){
//             console.log(error.message);
//         }
//     }