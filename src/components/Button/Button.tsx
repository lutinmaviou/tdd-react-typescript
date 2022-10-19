import React from 'react';
import './Button.css';

type Props = {
  className: string;
  value: string;
};

const Button: React.FC<Props> = ({ className, value }) => {
  return <button className={className}>{value}</button>;
};

export default Button;
