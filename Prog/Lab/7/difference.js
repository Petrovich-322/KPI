const difference = (data1, data2) => {
    const res = [];
    for(const i of data1){
        check = true;
        for(const j of data2){
            if(i == j){
                check = false;
                break;
            }
        }
        if(check)res.push(i);
    }
    return res;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);