import { connect } from 'react-redux'
import { getUsers, getProjects } from '../actions'
import Card from '../components/Card'

const mapStateToProps = (state, ownProps) => ({
    users: state.users,
    projects: state.projects,
})

const mapDispatchToProps = {   
    getUsers: getUsers,
    getProjects: getProjects,
}

const MainContentsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)

export default MainContentsContainer