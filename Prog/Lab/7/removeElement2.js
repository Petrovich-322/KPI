"use strict";

const removeElement = (data, ...arg) => {
    for(const i in data){
        for(const j of arg){
            if(data[i] == j) {
                data.splice(i,1);
                break;
            }   
        }
    }
}

const array = [1,2,3,4,5,6];

removeElement(array, 5,3);
console.log(array);