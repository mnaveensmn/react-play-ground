import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import lottie from 'lottie-web';
import './App.css';

// Import the JSON animation
import animationData from './animations/Animation - 1752063257602.json';

function App() {
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const lottieInstanceRef = useRef<any>(null);
  const jsonLottieRef = useRef<any>(null);

  // Load the .lottie file using lottie-web
  useEffect(() => {
    if (lottieContainerRef.current) {
      lottieInstanceRef.current = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData, // Using the same JSON data for demonstration
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
  }, []);

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
    <div className="App">
      <h1>🎭 Lottie Animation Playground</h1>
      <p>Demonstrating both JSON and Lottie file formats</p>
      
      <div className="animation-container">
        <div className="animation-section">
          <h2>🎨 JSON Animation (lottie-react)</h2>
          <div className="animation-wrapper">
            <Lottie 
              lottieRef={jsonLottieRef}
              animationData={animationData} 
              style={{ width: 300, height: 300 }}
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

        <div className="animation-section">
          <h2>🎬 Lottie Animation (lottie-web)</h2>
          <div className="animation-wrapper">
            <div 
              ref={lottieContainerRef} 
              style={{ width: 300, height: 300 }}
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
      </div>

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
    </div>
  );
}

export default App;
