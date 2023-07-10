//13-desestructuring arrays
const users = ['pere', 'anna', 'susana', 'maria', 'jaume', 'mariona', 'ares'];

//De tots els elements de l'array en vull obtenir alguns. 
//Desestructurarem l'array en una variable que usarem en el nostre context:
//const [pere, b, susana, , ,mariona] = users;
//console.log(pere, b, susana,mariona);

//Amb l'operador Spread es poden obtenir la resta d'elements dun array
const [pere, anna,...laResta] = users;
console.log(pere, anna, ...laResta);
console.log(...laResta);
console.log('jaume',...laResta);

