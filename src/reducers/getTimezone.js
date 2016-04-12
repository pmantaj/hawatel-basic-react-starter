export default function (state = [], action){
    switch(action.type){
        case 'GET_TIMEZONE':
            console.log('Action GET_TIMEZONE', state);
            return [ action.payload, ...state ];
        default:
            console.log('Action DEFAULT');
            return state;
    }l
}