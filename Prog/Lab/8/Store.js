const store = (num) => {
    const localNum = num;
    const func = () => {
        return localNum;
    }
    return func;
}

const read = store(5);
const res = read();
console.log(res);