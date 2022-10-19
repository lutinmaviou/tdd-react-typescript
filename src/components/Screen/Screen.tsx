import React from 'react';
import './Screen.css';

type Props = {
  value: string;
};

const Screen: React.FC<Props> = ({ value }) => {
  return <div className="screen">{value}</div>;
};

export default Screen;
