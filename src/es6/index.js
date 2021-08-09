//esta es la version antes de es6
function newFunction(name, age, country){
    var name = name || 'nombre';
    var age = age || 12;
    var country = country || 'MX';
    console.log(name, age, country);
}

//declaracion de los parametros en ES6
function newFunction2(name='name', age=78, country='MX'){
    console.log(name, age, country);
}

newFunction2(); //tomara los valores por defecto
newFunction2('axl', 28, 'MX')// mandando valores a los parametros

let hello = 'Hello';
let world = "World";

let epicPhrase = hello + ' ' + world;//version antigua
console.log(epicPhrase);

//template literal
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase);


//Multilinia en string
let lorem = "lorem ipsum ### ~~\n"
+ "next line"; // antigua forma de crear frases multilineas

let lorem2 = `otra frase
siguiente linea`// nueva forma de crear frases multilineas

console.log(lorem);
console.log(lorem2);


////
let person = {
    name: 'axl',
    age: 28,
    country: 'MX'
}

console.log(person.name, person.age)// forma anterior de obtener los valores del objeto

let {age, country} = person;// nueva version de obtener valores del objecto 


console.log(age, country);


////OPERADOR DE PROPAGACION
let team1 = ['a', 'b', 'c', 'd'];
let team2 = ['e', 'f', 'g', 'h'];

let education = ['i', ...team1, ...team2];

console.log(education);


{
    var globalVar = 'global';// se cuentra de forma global y se puede acceder en cualquier bloque de codigo 
}

{
    let globalLet = 'global let';// solo se peude acceder dentro del codigo al que pertenece
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);// no se puede acceder a esta variable


const a = 'b';// constante nueva en ES6 y no se puede reasignar


let name = 'axel';
let age = 28;
let obj = {// old way to create objects ES5
    name: name,
    age: age,
}

let obj2 = {name, age}; // new wayt to create objects in ES6


///arrow function
const names = [
    {
        name: 'axel',
        age: 28
    },
    {
        name: 'alex',
        age:56
    }
]

let listOfName = names.map( function (item) {//old verstion to create functions
    console.log(item.name)

});

let listOfName2 = names.map( (item) => { // new version to create functions
    console.log(item.name)
});

let listOfName3 = (name, age, country) => {
//... 
}

// promises

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            return resolve('Hey!');
        } else {
            return reject('Ups');
        }
    });
}

helloPromise()
.then(response => console.log(`response: ${response}`))
.catch(err => console.log(`error: ${err}`));


//Creating clases

class Calculater {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum (valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + valueB;
    }
}

const calc = new Calculater();
console.log(calc.sum(2,2));