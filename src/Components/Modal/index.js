import React, { Component } from 'react';
import './styles.scss';

class Modal extends Component {
  handleKeyPress = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleClick = () => {
    this.props.closeModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillMount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div
        className="Overlay"
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
      >
        <div className="Modal">
          <img src={this.props.url} alt="img" />
        </div>
      </div>
    );
  }
}

export default Modal;
