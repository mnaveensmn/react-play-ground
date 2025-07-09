import React, { useRef, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieReactProps {
  animationData: any;
  width?: number;
  height?: number;
}

const LottieReact: React.FC<LottieReactProps> = ({ 
  animationData, 
  width = 300, 
  height = 300 
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const jsonLottieRef = useRef<any>(null);

  const toggleJsonAnimation = () => {
    if (jsonLottieRef.current) {
      if (isPaused) {
        jsonLottieRef.current.play();
      } else {
        jsonLottieRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="animation-section">
      <h2>🎨 JSON Animation (lottie-react)</h2>
      <div className="animation-wrapper">
        <Lottie 
          lottieRef={jsonLottieRef}
          animationData={animationData} 
          style={{ width, height }}
          loop={true}
          autoplay={true}
        />
      </div>
      <div className="controls">
        <button onClick={toggleJsonAnimation}>
          {isPaused ? '▶️ Play' : '⏸️ Pause'}
        </button>
      </div>
    </div>
  );
};

export default LottieReact;
