'use strict'

const unique = (data) => {
    const res = [];
    for (const i of data){
        check = true;
        for (const j of res){
            if (i == j){
                check = false;
                break;
            }
        }
        if (check) res.push(i);
    }
    return res;
}

const result = unique([2,1,1,3,2]);
console.log(result);