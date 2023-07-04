
function sayHello(nom = 'Susana', age = 0){

    const greating = `Hola Mon mundial ${nom} ${age}`;
    // console.log("Hola Jaume");

    return greating;
};

//const result = sayHello();
//console.log(result);
console.log(sayHello("Jaume"));


//FUNCIO ANÒNIMA:
const diguesHola = function(nom = 'Susana', age = 0){
    const greating = `Hola Mon mundial ${nom} ${age}`;
    // console.log("Hola Jaume");
    return greating;
};

let salutacio = diguesHola();
console.log(salutacio);

//FUNCIÓ FLETXA:
/*
const diguesHi = (nom = 'Ares', age = 14) => {
    const greating = `Hola Mon mundial ${nom} ${age}`;
    // console.log("Hola Jaume");
    return greating;
};

const diguesHi = (nom = 'Ares', age = 14) => {
    return `Hola Mon mundial ${nom} ${age}`;
};
*/

const diguesHi = (nom = 'Mariona', age = 17) =>  `Hola Mon mundial ${nom} ${age}`;

console.log(diguesHi());

const add = (a = 0, b = 0) =>  a+b;

console.log(add(10,5));


