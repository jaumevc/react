import { Fragment } from "react";

/*
function HelloWorld({user, id}){
    const carrec = 'Boss';
    return (
            <Fragment>
                <h1>Hola que tal aniuat</h1>
                <div>Hello Món mundial i valor variable = {user}, amb id = {id} i càrrec = {carrec}</div>
            </Fragment>
        );
}
*/

const HelloWorld = ({user, id, title = 'Hello mondie!!'})=>{
   
    const carrec = 'Boss';
    return (
            <>
                <h1>{title}</h1>
                {/* <div>Hello Món mundial i valor variable = {JSON.stringify(user)}, amb id = {id + 50} i càrrec = {carrec}</div>  */}
                <p>el usuari es diu {user.name} {user.lastName}</p>
            </>
        );
}
export{
    HelloWorld 
}