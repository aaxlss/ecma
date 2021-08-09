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
        (true)
        ?resolve('hello World')
        :resolve(new Error('test error'))
    });
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('finish'));