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

const HelloWorld = ({user, id})=>{
    const carrec = 'Boss';
    return (
            <Fragment>
                <h1>Hola que tal aniuat</h1>
                <div>Hello Món mundial i valor variable = {user}, amb id = {id} i càrrec = {carrec}</div>
            </Fragment>
        );
}
export{
    HelloWorld 
}