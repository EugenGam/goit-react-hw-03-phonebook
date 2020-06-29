import React from 'react';
import './styles.scss';

const Button = ({ findMore }) => {
  return (
    <div className="buttonWrapper">
      <button className="Button" onClick={findMore}>
        Find more!
      </button>
    </div>
  );
};

export default Button;
