import React from 'react';
import './Button.css';

const ButtonWrapper: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { title: string; className: string; value: string }
> = ({ ...props }) => {
  const pressButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.boxShadow = '0 0 0.01vw 0.1vw, 0 0 0.01vw 0.1vw';
  };
  const releaseButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.boxShadow = '0 0 0.4vw 0.1vw, 0 0 0.4vw 0.1vw';
  };
  return (
    <button
      {...props}
      className={props.className}
      title={props.title}
      onMouseDown={pressButton}
      onMouseUp={releaseButton}
    >
      {props.value}
    </button>
  );
};

export default ButtonWrapper;
