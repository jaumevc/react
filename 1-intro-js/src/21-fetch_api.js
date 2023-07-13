//21-fetch_api

//El fetch es una Promise que retorna un response que és una altra Promise per poder convertir-ho a un cert format (xe:json)
//Enlloc del httpClient tb li podriem dir promise -> ja que es una promesa 
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

/*
httpClient.then((response)=>{
    //hem de convertir la promesa a JSON que a la seva vegada retorna una altra promesa
    response.json().then(data =>{
        console.log(data);
    });
}).catch((reject)=>{
    console.error(reject);
});
*/

httpClient.then((response)=>{
    return response.json();
}).then((data)=>console.log(data));

console.log('Mostrant si hi ha delay');


 




