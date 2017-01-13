// @flow
import React from 'react';

const buttonStyles = {
  backgroundColor: '#FFFFFF',
  border: '1px solid rgb(236, 199, 199)',
  borderRadius: 3,
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
};

type ButtonProps = {|
  style?: Object,
  children?: any,
  onClick?: (e: SyntheticMouseEvent) => any,
  |};

const Button = ({ children, onClick, style = {} }: ButtonProps) => (
  <button
    style={{ ...buttonStyles, ...style }}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
};

export default Button;
