const invoice = {
    id:10,
    name: 'Material d\'oficina',
    date: new Date(),
    client: 'Corporation & Co',
    total: 1000.00 
}

console.log(invoice);

console.log("Total factura: "+invoice.total);

invoice.client= "Diputació";
invoice.total = 5000.00;

console.log(invoice);
