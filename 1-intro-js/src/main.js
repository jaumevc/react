//13-desestructurar arrays

const user ={
    username: 'Jaume',
    email: 'jaume@gmail.cat',
    age: 54,
    ranking: 9
}

//desestructurem amb una function:
/*
const userDetail = (user)=>{
    const {username, email} = user;
    console.log(`${username} té ${email} d\'email`);
}

const userDetail = ({username, email})=>{
    console.log(`${username} té ${email} d\'email`);
}
*/
const userDetail = (user)=>{
    console.log(`${user.username} té ${user.email} d\'email`);
}

userDetail(user);
