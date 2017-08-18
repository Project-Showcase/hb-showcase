export default projects = (state = [], action) => {
    switch(action.type) {
        case 'SET_PROJECTS':
            return action.payload.projects;
        default:
            return state;
    }
}