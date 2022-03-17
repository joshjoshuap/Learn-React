import React, { Component } from 'react';
import classes from './User.module.css';

// Class
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>
  }
}

// Functional
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
