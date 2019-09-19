import React from 'react';

const Button = ({ text, className }) => (
  <button className={`button ${className}`}>{text}</button>
);

export default Button;