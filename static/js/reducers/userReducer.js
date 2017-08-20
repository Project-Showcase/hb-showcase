export default users = (state = [], action) => {
    switch(action.type) {
        case 'SET_USERS':
            console.log("got into user reducer")
            return action.payload.users;
        default:
            return state;
    }
}