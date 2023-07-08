//11-desestructurar-objectes

const user ={
    username: 'Jaume',
    email: 'jaume@gmail.cat',
    age: 54,
    ranking: 9
}

/*
const username= user.username;
const age= user.age;
const ranking = user.ranking;
*/

//desestructurem user per usar els atributs que vulguem:
const {username, ranking, age} = user;

console.log(`${username} té ${age} d\'edat`);
console.log(ranking);