//23-Api-dom

//El fetch es una Promise que retorna un response que és una altra Promise per poder convertir-ho a un cert format (xe:json)
//Enlloc del httpClient tb li podriem dir promise -> ja que es una promesa 
//const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

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

/*
httpClient.then((response)=>{
    return response.json();
}).then((data)=>console.log(data));
*/
const findAllUsers = async()=>{
    //El fetch es una promesa i amb el await diem que esperem a que es resolgui
    const response = await fetch('https://jsonplaceholder.typicode.com/users');// amb await es converteix a la resposta
    //El json tb es una promesa i tb espeara el resolve de la promesa
    return await response.json(); //amb el await es converteix al data, al json de resposta
    //console.log(data);
    //return data;
}

const users = await findAllUsers();
console.log(users);

console.log('Mostrant si hi ha delay');



 




