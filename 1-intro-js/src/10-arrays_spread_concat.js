//10-Arrays i operador Spread
//const products = ['taula', 4, 'cadira', 'llit', 5.5];
//products.push('televisor');

//let products = ['taula', 4, 'cadira', 'llit', 5.5];
//products = products.concat('televisor');

const products = ['taula', 4, 'cadira', 'llit', 5.5];
const products2 = products.concat(['televisor','laptop']);

console.log("\nProductes:");
console.log(products);
console.log("\nProductes:");
console.log(products2);


const fruits = ['peres', 'pomes', 'prèssecs','melons'];

//Ara convinarem el contingut dels 2 arrays en un nou array amb l'op. spread
const market = [...products, ...fruits, 'raïm', 'enciam', 'trunfes'];

//convinacio de arrays amb contact:
const superMarket = products2.concat(fruits, 'raïm', 'enciam', 'trunfes');

//Tambe es pot escriure:
const carrefour = products2.concat(fruits).concat(['raïm', 'enciam', 'trunfes'])

console.log("\nProductes:");
console.log(products);

console.log("\nFruites:");
console.log(fruits);

console.log("\nMarket(...Spread), Fruites i Productes:");
console.log(market);

console.log("\nSuperMarket(concat), Fruites i Productes2:");
console.log(superMarket);
console.log("\nCarrefour(concat), Fruites i Productes2:");
console.log(carrefour);




