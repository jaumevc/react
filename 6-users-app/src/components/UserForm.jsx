import { useState } from "react";

const initialUserForm = {
    username:'',
    password:'',
    email:''
}
export const UserForm = ()=>{

    const [userForm, setUserForm] = useState(initialUserForm);

    const { username, password, email} = userForm;

    const onInputChange = (event)=>{
        // console.log(event.target.value);
        setUserForm({
            ...userForm,
            [event.target.name]:event.target.value
        })
    }
    //també es pot desestructurar i funciona igual:
    // const onInputChange = ({target})=>{
    //     // console.log(target.value);
    //     const {name, value } = target;
    //     setUserForm({
    //         ...userForm,
    //         [name]:value
    //     })
    // }

    const onSubmit = (event)=>{
        event.preventDefault();

        if(!username || !password || !email){
            alert('Els camps del formulari no poden estar buits');
            return;
        }

        console.log("enviant dades del form...");
        console.log(userForm);

        //desar els valors userFrom en el llistat d'usuaris
            /*proper capitol. Video 107 Afegir usuari*/

        //netejar els inputs amb els valors per defecte
        setUserForm(initialUserForm);
    }

    return(
        <>
            <p>Formulari d'Usuari</p>

            <form onSubmit={ onSubmit }>
                <input 
                    className="form-control my-3 w-75" 
                    placeholder="Username"
                    name="username"
                    value= {username}
                    onChange={ onInputChange } 
                />
                <input 
                    className="form-control my-3 w-75" 
                    placeholder="Password"
                    name="password"
                    type="password"
                    value= {password}
                    onChange={ onInputChange } 
                />
                <input 
                    className="form-control my-3 w-75" 
                    placeholder="Email"
                    name="email" 
                    value= {email}
                    onChange={ onInputChange } 
                />
                <button 
                    type="submit"
                    className="btn btn-primary">
                        Afegir
                </button>
            </form>
        </>
    );
}