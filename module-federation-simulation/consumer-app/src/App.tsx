import React, { Suspense } from 'react';

// Import remote components from provider app
const RemoteButton = React.lazy(() => import('providerApp/Button'));
const RemoteHeader = React.lazy(() => import('providerApp/Header'));

const App: React.FC = () => {
  const handleButtonClick = () => {
    alert('Button clicked from remote component!');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Suspense fallback={<div>Loading Header...</div>}>
        <RemoteHeader />
      </Suspense>
      
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>🎯 Consumer App (Port 3002)</h1>
        <p>This app consumes components from the Provider App using Module Federation!</p>
        
        <div style={{ margin: '20px 0' }}>
          <h3>Remote Components:</h3>
          
          <div style={{ margin: '20px 0' }}>
            <h4>Remote Button (Primary):</h4>
            <Suspense fallback={<div>Loading Button...</div>}>
              <RemoteButton 
                text="Click me! (Primary)" 
                onClick={handleButtonClick}
                variant="primary"
              />
            </Suspense>
          </div>
          
          <div style={{ margin: '20px 0' }}>
            <h4>Remote Button (Secondary):</h4>
            <Suspense fallback={<div>Loading Button...</div>}>
              <RemoteButton 
                text="Click me! (Secondary)" 
                onClick={handleButtonClick}
                variant="secondary"
              />
            </Suspense>
          </div>
        </div>

        <div style={{ 
          marginTop: '40px', 
          padding: '20px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '8px',
          border: '1px solid #dee2e6'
        }}>
          <h3>📋 Module Federation Demo Info:</h3>
          <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
            <li><strong>Provider App</strong>: Running on port 3001</li>
            <li><strong>Consumer App</strong>: Running on port 3002 (this app)</li>
            <li><strong>Remote Components</strong>: Button & Header loaded from Provider App</li>
            <li><strong>Shared Dependencies</strong>: React & React-DOM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
