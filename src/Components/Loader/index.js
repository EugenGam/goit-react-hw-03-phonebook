import React from 'react';
import './styles.scss';

const Loader = () => {
  return (
    <div className="loadingPic">
      <img
        src={require('./loadingGif.gif')}
        alt="loading..."
        width="250"
        height="250"
      ></img>
    </div>
  );
};

export default Loader;
