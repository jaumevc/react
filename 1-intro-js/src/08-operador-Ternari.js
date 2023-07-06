//08-operador-Ternari
const average = 5.9;

//const assoliment = average >= 5.5 ?  'Aprovat' : 'Suspés';
let assoliment = average >= 5.5 ?  'Aprovat' : 'Suspés';

console.log(assoliment);

if(average >= 5.5){
    assoliment = 'Aprovat (des de l\'if)';
} else {
    assoliment = 'suspés (des de l\'if)';
}

console.log(assoliment);

let max=0;
const a= 5;
const b= 9;
const c= 3;

max = a > b ? a :  b;

max = max > c ? max :  c;

console.log('el número més gran és: '+max);