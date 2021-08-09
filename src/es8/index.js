const data = {
    frontend: 'axel',
    backend: 'alex',
    design: 'axl',
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);


const data = {
    frontend: 'axel',
    backend: 'alex',
    design: 'axl',
}

const values = Object.values(data);
console.log(values);

const string = 'hello';
console.log(string.padStart(7,'hi '));
console.log(string.padEnd(12, '----'));