// require('../styles/card.css')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUsers, getProjects } from '../actions/index';
import Card from './Card'

class CardSet extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
    getProjects: PropTypes.func.isRequired,
  }

  static defaultProps = {
    users: [],
    projects: [],
    getUsers: () => {},
    getProjects: () => {}
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.getProjects();
  }

  _generateIndividualCards = () => {
      
    return this.props.users.map((user, i) => {
      return <Card user={user} project={project} />
    });

  }

  render() {
    return(
      // insert JSX here
      <div className='card-collection'>
        this._generateIndividualCards()
      </div>
    );
  }
}

export default CardSet;

