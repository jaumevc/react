//19-promises-then-catch

//import {invoices, itemReferencia, invoiceByName} from './data/invoice';
//import invoiceByName,{ invoices, itemReferencia } from './data/invoice';
//import invoices, { itemReferencia, invoiceByName } from './data/invoice';
//import ornitorrinco,{ invoices, itemReferencia } from './data/invoice';
import { invoiceById } from './data/invoice';

//AQUEST ÉS ASSINCRONE AMB LO QUE S'EXECUTA EN 2ON TERME
const promise = new Promise((resolve, reject) => {
    //normalment s'usa per consumir apis externes en que no sabem si hi haura una errada de comunicacio...
    //simulem un Delay amb setTimeOut:
    setTimeout(()=>{
        const result = invoiceById(3); 
        //console.log(invoiceById(3));
        
        if(result){
            resolve(result);
        }else{
            reject('error: No existeix el recurs');
        }

    },2500);
});


//Quan es resolt amb èxit:
promise.then(console.log).catch(console.error);




 




