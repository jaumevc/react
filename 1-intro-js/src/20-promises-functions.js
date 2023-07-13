//20-promises-functions

//import {invoices, itemReferencia, invoiceByName} from './data/invoice';
//import invoiceByName,{ invoices, itemReferencia } from './data/invoice';
//import invoices, { itemReferencia, invoiceByName } from './data/invoice';
//import ornitorrinco,{ invoices, itemReferencia } from './data/invoice';
import { findInvoicesById  } from './data/invoice';

//Quan es resolt amb èxit + o quan hi ha un error:
//l'expressio més simplificada
//findInvoicesById(1).then(console.log).catch(console.error);
////l'expressio més senzilla d'entendre
findInvoicesById(1).then((resolve)=>{
    console.log(resolve);
}).catch((reject) =>{
    console.error(reject);
});


 




