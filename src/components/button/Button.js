import React from 'react';
const Button = ({ onBtnClick, title }) => {
  return (
    <button onClick={onBtnClick} className="Button">
      {title}
    </button>
  );
};

export default Button;
