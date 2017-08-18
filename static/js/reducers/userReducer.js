export default const users = (state = [], action) => {
    switch(action.type) {
        case 'SET_USERS':
            return action.payload.users;
        default:
            return state;
    }
}