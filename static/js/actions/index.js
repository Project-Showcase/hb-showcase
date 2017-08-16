import 'whatwg-fetch';

export const setUsers = (users) => ({
    type: 'SET_USERS',
    payload: {
        users: users
    }
})

export const getUsers = (dispatch) => {
    return (dispatch) => {
        console.log("Getting users");
        fetch('/get-users-json')
        .then((resp) => resp.json())
        .then((data) => {
            console.log('users received');
            var users = data
            dispatch(setUsers(users))
        })
    }
}

export const setProjects = (projects) => ({
    type: 'SET_PROJECTS',
    payload: {
        projects: projects
    }
})

export const getProjects = (dispatch) => {
    return (dispatch) => {
        console.log("Getting projects");
        fetch('/get-projects-json')
        .then((resp) => resp.json())
        .then((data) => {
            console.log('projects received');
            var projects = data
            dispatch(setProjects(projects))
        })
    }
}