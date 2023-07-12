//18-promises

//import {invoices, itemReferencia, invoiceByName} from './data/invoice';
//import invoiceByName,{ invoices, itemReferencia } from './data/invoice';
import invoices, { itemReferencia, invoiceByName } from './data/invoice';
//import ornitorrinco,{ invoices, itemReferencia } from './data/invoice';

//const invoice =  invoices.find(factura => {return factura.id === 3});
const invoiceById =  invoices.find(factura => factura.id === 3);
//const invoiceByName =   invoices.find(factura => factura.name === 'Material magatzem');
const invoiceByClientName =  invoices.find(factura => factura.client.name === 'Corporation TURURUT');

console.log(invoiceById);
console.log(invoiceByName('Material magatzem'));
//console.log(ornitorrinco('Material magatzem'));
console.log(invoiceByClientName);

//FILTRAR...pels id > 1
//el filter moltes vegades s'usa per crear un nou objecte excloient algun dels registres
const invoiceFilter = invoices.filter( factura =>  factura.id > 1 );

//El includes ho fa per referencia objecte, no per valor. Ha de ser la mateixa instància en memoria
const invoiceFilter2 = invoices.filter( factura =>  factura.items.includes(itemReferencia));

console.log(invoiceFilter);
console.log(invoiceFilter2);

//SOME
const invoiceFilter3 = invoices.some( factura =>  factura.id === 3 );
console.log(invoiceFilter3);

//FOREACH
console.log("forEach");
invoices.forEach( factura =>  console.log(factura));

console.log("forEach 2:");
invoices.forEach(factura => {
    if(factura.id >2 ) console.log(factura)
});

