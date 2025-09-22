"use strict";

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

const personAge = {};

for(const i in persons) {
    const obj = persons[i];
    const age = obj["died"] - obj["born"];
    personAge[i] = age;
}

console.dir({personAge});

