//09-Arrays
const products = ['taula', 4, 'cadira', 'llit', 5.5];

products.push('televisor');

console.log("\n");
console.log(products);
//console.log({products});

console.log("forEach amb funcio de fletxa:\n");
products.forEach(e => console.log(e));
console.log("forEach amb funcio de fletxa i parentesis pels arguments:\n");
products.forEach((el) => {console.log(el)});
console.log("forEach amb funcio de fletxa reduit al maxim, quan nomes te un argument," 
    + " directament es pot retornar aquest, no cal posar-lo com a argument:\n");
products.forEach(console.log);

console.log("\n");
console.log("forEach amb funcio normal:\n");
products.forEach(function(ele){
    console.log(ele);
});

console.log("\nAmb bucle for:");
for(const prod of products){
    console.log(prod);
}

console.log("\nAmb bucle for tradicional:");

for (let index = 0; index < products.length; index++){
    const element = products[index];
    console.log(element);
}

console.log("\nImprimir element amb indes 3:");
console.log(products[3]);