'use strict';

const User = [
    { name: "Ivan_Petrenko", phone: "+380501112233" },
    { name: "Olena_Koval", phone: "+380671234567" },
    { name: "Andrii_Shevchenko", phone: "+380931112233" },
    { name: "Mariia_Ivanova", phone: "+380991234567" },
];

let findPhoneByName = (name) => {
    for(const i in User){
        if(User[i].name == name) return User[i].phone
    }
}

console.log(findPhoneByName("Olena_Koval"));

const hashUser =  { 
    Ivan_Petrenko: "+380501112233",
    Olena_Koval: "+380671234567" ,
    Andrii_Shevchenko: "+380931112233", 
    Mariia_Ivanova: "+380991234567" ,
}

findPhoneByName = (name) => hashUser[name];

console.log(findPhoneByName("Olena_Koval"));