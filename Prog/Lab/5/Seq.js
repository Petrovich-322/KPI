'use strict';

const func = [];
//console.log(typeof(5) == "number");
function seq(data) {
    //console.log(data, typeof(data));
    if(typeof(data) == "function") {
        func.push(data);
        return seq; 
    } 
    else if(typeof(data) == "number") {
        let point = func.length - 1, res = data;
        while(point >= 0) {
            const localFunc = func[point];
            //console.log(func[point]);
            //console.log(res);
            res = localFunc(res);
            point--;
        }
        return res;
        //return func.reduceRight((res, localFunc) => localFunc(res), data); 

    }
}

console.log(
    seq(x => x + 7)
    (x => x * 2)
    (5)
);

