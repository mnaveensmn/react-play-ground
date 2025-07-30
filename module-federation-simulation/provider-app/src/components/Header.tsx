import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      backgroundColor: '#282c34',
      padding: '20px',
      color: 'white',
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
      🚀 Header from Provider App (Port 3001)
    </header>
  );
};

export default Header;
