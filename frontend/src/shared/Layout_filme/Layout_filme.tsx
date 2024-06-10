import React, { ReactNode } from 'react';
import Nav_filme from './components/navbar/Nav_filme';

interface LayoutFilmeProps {
  children: ReactNode;
}

const LayoutFilme: React.FC<LayoutFilmeProps> = ({ children }) => {
  return (
    <>
      <Nav_filme />
      {children}
    </>
  );
};

export default LayoutFilme;
