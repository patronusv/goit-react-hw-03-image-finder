import React from 'react';
import PropTypes from 'prop-types';
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
Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
