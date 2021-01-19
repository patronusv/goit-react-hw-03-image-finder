import React from 'react';
import ButtonWrapper from './ButtonStyled';
const Button = ({ onBtnClick, title }) => {
  return (
    <ButtonWrapper>
      <button onClick={onBtnClick} className="Button">
        {title}
      </button>
    </ButtonWrapper>
  );
};

export default Button;
