import React, { Component } from 'react';
import './styles.scss';

class Wrapper extends Component {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default Wrapper;
