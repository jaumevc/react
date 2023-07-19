import { Fragment } from "react";
import PropTypes from 'prop-types';

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

const HelloWorldApp = ({user, id, title = 123, book})=>{
   
    const carrec = 'Boss';
    return (
            <>
                <h1>{title}</h1>
                {/* <div>Hello Món mundial i valor variable = {JSON.stringify(user)}, amb id = {id + 50} i càrrec = {carrec}</div>  */}
                <p>L'usuari es diu {user.name} {user.lastName}, amb l'id:{id}</p>
                <p> { book } </p>
            </>
        );
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number,
    user: PropTypes.object.isRequired

}

HelloWorldApp.defaultProps = {
    title: 'Hola mon by default method',
    book: 'java fundamentals'
}


export{
    HelloWorldApp 
}


