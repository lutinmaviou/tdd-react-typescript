import React, { MouseEventHandler } from 'react';
import './Button.css';

type Props = {
  className: string;
  value: string;
};

const Button: React.FC<Props> = ({ className, value }) => {
  const pressButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.boxShadow = '0 0 0.05vw 0.1vw, 0 0 0.05vw 0.1vw';
  };
  const releaseButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.boxShadow = '0 0 0.4vw 0.1vw, 0 0 0.4vw 0.1vw';
  };
  return (
    <button className={className} onMouseDown={pressButton} onMouseUp={releaseButton}>
      {value}
    </button>
  );
};

export default Button;
