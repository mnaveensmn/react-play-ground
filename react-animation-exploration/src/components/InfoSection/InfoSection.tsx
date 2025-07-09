import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className="info-section">
      <h3>📝 What's happening here?</h3>
      <div className="info-grid">
        <div className="info-card">
          <h4>JSON Animation</h4>
          <p>Using <code>lottie-react</code> library with imported JSON data</p>
          <p>Features: Play/Pause control</p>
        </div>
        <div className="info-card">
          <h4>Lottie Animation</h4>
          <p>Using <code>lottie-web</code> library with animation data</p>
          <p>Features: Play/Pause, Speed control</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
