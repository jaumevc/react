export const usersReducer = (state = [], action)=>{
    switch (action.type) {
        case 'addUser':
            
            return[
                ...state,
                {
                    //el action.payload conte els camps de l'objecte user:
                    //...username, password, email
                    ...action.payload,
                    // a banda del payload li afegim la id dinamica
                    //new Date().getTime() ens retorna un numero unic x això ho usem com a id
                    id : new Date().getTime(),
                }
            ];
    
        default:
            return state;
    }
}