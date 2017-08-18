// require('../styles/card.css')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUsers, getProjects } from '../actions/index';

class Card extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
    getProjects: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getUsers();
    this.proprs.getProjects();
  }

  _generateIndividualCards = () => {
    
  }

  render() {
    return(
      // insert JSX here
      <div className='card-container'>
      CARD INFO HERE
      </div>
    );
  }
}

export default Card;