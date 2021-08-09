const obj = {
    name: 'axel',
    age: 28,
    country: 'MX',
}

let {name, ...all} = obj;
console.log(name, all);