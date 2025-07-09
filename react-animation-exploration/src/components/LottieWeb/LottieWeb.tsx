import React, { useRef, useEffect, useState } from 'react';
import lottie from 'lottie-web';

interface LottieWebProps {
  animationData: any;
  width?: number;
  height?: number;
}

const LottieWeb: React.FC<LottieWebProps> = ({ 
  animationData, 
  width = 300, 
  height = 300 
}) => {
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const lottieInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (lottieContainerRef.current) {
      lottieInstanceRef.current = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      });
    }

    return () => {
      if (lottieInstanceRef.current) {
        lottieInstanceRef.current.destroy();
      }
    };
  }, [animationData]);

  const togglePlayPause = () => {
    if (lottieInstanceRef.current) {
      if (isPlaying) {
        lottieInstanceRef.current.pause();
      } else {
        lottieInstanceRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeSpeed = (newSpeed: number) => {
    if (lottieInstanceRef.current) {
      lottieInstanceRef.current.setSpeed(newSpeed);
      setSpeed(newSpeed);
    }
  };

  return (
    <div className="animation-section">
      <h2>🎬 Lottie Animation (lottie-web)</h2>
      <div className="animation-wrapper">
        <div 
          ref={lottieContainerRef} 
          style={{ width, height }}
        />
      </div>
      
      <div className="controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>
        <div className="speed-controls">
          <label>🚀 Speed: {speed}x</label>
          <div className="speed-buttons">
            <button 
              onClick={() => changeSpeed(0.5)}
              className={speed === 0.5 ? 'active' : ''}
            >
              0.5x
            </button>
            <button 
              onClick={() => changeSpeed(1)}
              className={speed === 1 ? 'active' : ''}
            >
              1x
            </button>
            <button 
              onClick={() => changeSpeed(2)}
              className={speed === 2 ? 'active' : ''}
            >
              2x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LottieWeb;
