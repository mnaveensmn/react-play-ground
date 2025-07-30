import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      style={{
        background: '#007bff',
        color: 'white',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
      }}
    >
      Header from Remote App (Port 3001) - Written in TypeScript
    </header>
  );
};

export default Header;