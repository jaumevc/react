const UserDeatils = ({user, id}) => {
    return <p>L'usuari es diu {user.name} {user.lastName}, i viu {user.city}, amb id= {id}</p>;
} 

export {
    UserDeatils
}