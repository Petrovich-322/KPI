const fn = () => {
    const a = { name: "Yehor", };
    let b = { name: "Petrovich", };
    a.name = "Vlad";
    b.name = "Yarik";
    
    b = {name: "Yehor Podhornyj"};
    console.dir({a, b});
}

fn();

const createUser = (name, city) => {
    const User = {name: name, city: city};
    return User;
}
console.dir(createUser("Yehor", "Kremenchuck"));