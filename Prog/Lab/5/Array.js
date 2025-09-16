'use strict';

const array = () => {
    //let greetings = "Hello World!"
    const data = [];
    const number = (num) => {
        //console.log(greetings);
        //greetings = "Goodbye";
        return data[num]; 
    }
    
    number.push = (num) => 
        data.push(num);
    number.pop = () => {
        const num = data[data.length - 1];
        data.pop();
        return num;
    }   
        
    return number;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined



