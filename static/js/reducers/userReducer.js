export default users = (state = [], action) => {
    switch(action.type) {
        case 'SET_USERS':
            return action.payload.users;
        default:
            return state;
    }
}