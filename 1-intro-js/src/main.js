//23-Api-dom

const findAllUsers = async()=>{
    //El fetch es una promesa i amb el await diem que esperem a que es resolgui
    const response = await fetch('https://jsonplaceholder.typicode.com/users');// amb await es converteix a la resposta
    //El json tb es una promesa i tb espeara el resolve de la promesa
    const users = await response.json(); //amb el await es converteix al data, al json de resposta
    //crear una llista en html
    const ul = document.createElement('ul');
    users.forEach(user => {
        //cada element de la llista en html
        const li = document.createElement('li');
        li.innerText =user.name;
        ul.append(li);

        console.log(user.name);
    });

    document.getElementById('root').append(ul);
}

findAllUsers();

console.log('Mostrant si hi ha delay');



 




