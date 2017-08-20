import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUsers, getProjects } from '../actions/index';

class Card extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired,
  }



}
