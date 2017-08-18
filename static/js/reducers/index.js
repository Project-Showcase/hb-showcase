import { combineReducers } from 'redux';
import projects from './projectReducer';
import users from './userReducer';

export default const cardReducer = combineReducers ({
    projects,
    users
})
