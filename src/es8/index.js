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

////////////////
const helloWorld = () => {
    return new Promise((result, reject) => {
        (false) 
        ? setTimeout(() => result('Hello World'), 3000)
        : reject(new Error('Error'));
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}
anotherFunction();