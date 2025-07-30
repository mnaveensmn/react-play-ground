import React, { Suspense } from 'react';

const RemoteHeader = React.lazy(() => import('app_header/Header'));

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Suspense fallback={<div>Loading Header...</div>}>
        <RemoteHeader />
      </Suspense>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Welcome to the Main App (Port 3002)</h2>
        <p>The header above is being loaded live from a different application!</p>
      </main>
    </div>
  );
};

export default App;