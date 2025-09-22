"use strict";

const removeElement = (data, item) => {
    for(const i in data){
        if(data[i] == item) {
            data.splice(i,1);
            break;
        }
    }
}
const array = [1,2,3,4,5,6];

removeElement(array, 5);
console.log(array);