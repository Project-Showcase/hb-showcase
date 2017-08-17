require('../styles/card.css')

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
    getProjects: PropTypes.func.isRequired,
  }
}

  _generateIndividualCards = () => {
    
  }

  render() {
    return(
      // insert JSX here
      <div className='card-container'>
      I SHALL HOLD SOME INFOS AT SOME FUTURE INDETERMINATE POINT
      </div>
    )
  }

  export default Card