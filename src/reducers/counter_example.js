export default function(state = 0, action) {
    switch(action.type) {
        case 'DECREASE':
            return state - 1;
        case 'INCREASE':
            return state +1;
        default:
            return state;
    }
};
