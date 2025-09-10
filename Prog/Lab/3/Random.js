const random = (min = 0, max = 0) => {
    if(min > 0 && max == 0){
        max = min;
        min = 0;
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(3, 15));
