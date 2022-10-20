import { useState } from 'react';
import './Button.css';

type Props = {
  className: string;
  value: string;
  type?: string | null;
};

const Button: React.FC<Props> = ({ className, value, type }) => {
  const [operation, setOperation] = useState(type);
  const handleClickButton = () => {
    //e.preventDefault();
    setOperation(type);
    console.log(operation);
  };
  const pressButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.boxShadow = '0 0 0.05vw 0.1vw, 0 0 0.05vw 0.1vw';
  };
  const releaseButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.boxShadow = '0 0 0.4vw 0.1vw, 0 0 0.4vw 0.1vw';
  };
  return (
    <button
      className={className}
      onMouseDown={pressButton}
      onMouseUp={releaseButton}
      onClick={() => {
        handleClickButton();
      }}
      data-testid={className}
    >
      {value}
    </button>
  );
};

export default Button;
