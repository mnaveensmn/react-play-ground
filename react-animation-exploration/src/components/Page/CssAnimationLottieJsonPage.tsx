import React from 'react';
import CssAnimationLottieJson from '../CssAnimationLottieJson/CssAnimationLottieJson';

const CssAnimationLottieJsonPage: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <CssAnimationLottieJson />
    </div>
  );
};

export default CssAnimationLottieJsonPage;
