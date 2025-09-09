let list = [
    true,
    'hello',
    0,
    15,
    2,
    false,
    false,
    'word',
    -322,
    'mops',
    true,
];

let obj = {string: 0, boolean: 0, number: 0};

for (const i in list){ 
    const type = typeof(list[i]);
    obj[type]++;
}

console.dir({obj});

list = [
    14,
    'Vlad',
    8,
    'Petrovich',
    'IM',
    52,
    true,
    'Deutchland',
    88,
    true,
];
console.log("Hello ");
obj = {};

for (const i in list){ 
    const type = typeof(list[i]);
    if((obj[type]==undefined))obj[type]=1;
    else obj[type]++;
}       

console.dir({obj});

