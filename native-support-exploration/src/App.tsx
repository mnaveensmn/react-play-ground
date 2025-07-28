import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Main App component
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Native Support Exploration</h1>
          <nav className="navigation">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/geolocation" className="nav-link">Geolocation</Link>
            <Link to="/camera" className="nav-link">Camera</Link>
            <Link to="/storage" className="nav-link">Storage</Link>
            <Link to="/notifications" className="nav-link">Notifications</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/geolocation" element={<GeolocationPage />} />
            <Route path="/camera" element={<CameraPage />} />
            <Route path="/storage" element={<StoragePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

// Home page component
const HomePage: React.FC = () => {
  return (
    <div className="page">
      <h2>Welcome to Native Support Exploration</h2>
      <p>
        This application demonstrates various native browser APIs and features
        that can be accessed through modern web browsers.
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Geolocation API</h3>
          <p>Access device location information</p>
        </div>
        <div className="feature-card">
          <h3>Camera API</h3>
          <p>Access device camera and microphone</p>
        </div>
        <div className="feature-card">
          <h3>Storage APIs</h3>
          <p>Local storage, session storage, and IndexedDB</p>
        </div>
        <div className="feature-card">
          <h3>Notifications API</h3>
          <p>Send native browser notifications</p>
        </div>
      </div>
    </div>
  );
};

// Placeholder components for other pages
const GeolocationPage: React.FC = () => {
  return (
    <div className="page">
      <h2>Geolocation API</h2>
      <p>Geolocation features will be implemented here.</p>
    </div>
  );
};

const CameraPage: React.FC = () => {
  return (
    <div className="page">
      <h2>Camera API</h2>
      <p>Camera and media features will be implemented here.</p>
    </div>
  );
};

const StoragePage: React.FC = () => {
  return (
    <div className="page">
      <h2>Storage APIs</h2>
      <p>Storage features will be implemented here.</p>
    </div>
  );
};

const NotificationsPage: React.FC = () => {
  return (
    <div className="page">
      <h2>Notifications API</h2>
      <p>Notification features will be implemented here.</p>
    </div>
  );
};

export default App;
