import React from 'react';

type Props = {
  value: string;
};

const Screen: React.FC<Props> = ({ value }) => {
  return <div>{value}</div>;
};

export default Screen;
