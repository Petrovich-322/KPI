'use strict';

let list = [
    true, 'hello', 5, 12, -200, false, false, 'word', true, 322, 52, '1',
]
let obj = {string: 0, boolean: 0, number: 0};
for(const i in list) obj[typeof(list[i])]++;

console.dir({obj});

list = [ 
    "Petrovich", 42, true, "Vlad", 14, false, "+", "Dota", 322,      
]   
obj={};

for(const i in list){
    const type = typeof(list[i]);
    if(type in obj)obj[type]++;
    else obj[type]=1;
}

console.dir({obj});