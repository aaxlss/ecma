const obj = {
    name: 'axel',
    age: 28,
    country: 'MX',
}

let {name, ...all} = obj;
console.log(name, all);

const obj = {
    name: 'axel',
}
const obj1 = {
    ...obj,
    country: 'Mx',
}
console.log(obj1);