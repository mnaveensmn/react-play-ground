import React from 'react';
import Button from './components/Button';
import Header from './components/Header';

const App: React.FC = () => {
  const handleButtonClick = () => {
    alert('Button clicked from Provider App!');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Provider App 🏭</h1>
        <p>This app exposes components via Module Federation</p>
        <div style={{ marginTop: '20px' }}>
          <h3>Components Available for Federation:</h3>
          <div style={{ margin: '10px' }}>
            <Button text="Primary Button" onClick={handleButtonClick} />
          </div>
          <div style={{ margin: '10px' }}>
            <Button text="Secondary Button" variant="secondary" onClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
