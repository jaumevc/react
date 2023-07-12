//18-promises

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
        console.log(invoiceById(3));
        //console.log('Realitzant alguna tasca amb Delay');
    },2500);
});


 




