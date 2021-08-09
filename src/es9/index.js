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

///////

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ?resolve('hello World')
        :resolve(new Error('test error'))
    });
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('finish'));


///
const regexData = /([0-9]{4}-([0-9]){2}-([0-9]{2}))/

const match = regexData.exec('2018-04-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);