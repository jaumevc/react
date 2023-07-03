console.log("proves inicials js. VARIABLES!!");
//PER DECLARAR UNA VARIABLE ANTIGAMENT S'USAVA VAR ara usarem LET o CONST.
//EL MOTIU ES XQ VAR DEFINEIX UNA VARIABLE D'SCOPE GLOBAL. EN CANVI LET TE UN SCOPE LOCAL.

let nom ="Jaume v.";

let nom2 = 'Susana J.';

nom = 'Mariona';

const lastname= 'Valls';

//lastname ='Jiménez';

const condicio = true;

if(condicio){
    let nom ='Ares';
    const lastname = 'Campistany';
    console.log(nom+' '+lastname);
}

console.log("Hola món "+nom+' +i '+nom2+' '+lastname);
console.log(`Hola món ${nom} i ${nom2} ${lastname}`);





