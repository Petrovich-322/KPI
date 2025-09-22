'use strict'

const iterate = (object, callback) => {
  const keys = Object.keys(object);
  const values = Object.values(object);  
  for (const i in keys){
        const key = keys[i];
        const value = values[i];
        callback(key,value);
    }
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});