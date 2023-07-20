import { Fragment } from "react";
import PropTypes from 'prop-types';
import { Title } from "./components/Title";
import { UserDeatils } from "./components/UserDetails";
import { Book } from "./components/Book";

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

const HelloWorldApp = ({user, id, title, book})=>{
    const carrec = 'Boss';
    return (
            <>
                <Title title = 'Hola des del component Title, rebut des del HelloWorldApp'/>
                <h1>{title}</h1>
                <Title title = {title}/>
                <div>Hello Món mundial i valor variable = {JSON.stringify(user)}, amb id = {id + 50} i càrrec = {carrec}</div> 
                <p>L'usuari es diu {user.name} {user.lastName}, amb l'id:{id}</p>
                <UserDeatils user = {user} id = {id}/>
                <p>{ book }</p>
                <Book book = "Pin i Pon des de HelloWorldApp"/>
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


