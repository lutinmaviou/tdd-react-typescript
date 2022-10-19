import React, { PropsWithChildren } from 'react';
import './ButtonsWrapper.css';

type Props = PropsWithChildren<{
  value?: string;
}>;

const ButtonsWrapper: React.FC<Props> = ({ children }) => {
  return <div className="buttons-wrapper">{children}</div>;
};

export default ButtonsWrapper;
