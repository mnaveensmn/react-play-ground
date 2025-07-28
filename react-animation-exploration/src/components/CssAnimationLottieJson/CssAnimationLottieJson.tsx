import React, { useState } from "react";
import "./CssAnimationLottieJson.css";

const CssAnimationLottieJson: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    // Reset animation after 1.5 seconds (duration from JSON)
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <div className="lottie-json-container" onClick={handleClick}>
      <div className={`lottie-animation ${isAnimating ? 'animate' : ''}`}>
        
        {/* Main Green Circle - Ellipse that scales from 0 to full */}
        <div className="circle-layer">
          <div className="green-circle"></div>
        </div>
        
        {/* Checkmark Path - 3-point stroke path */}
        <div className="checkmark-layer">
          <svg viewBox="0 0 512 512" className="checkmark-svg">
            <path
              className="checkmark-path"
              d="M 179.574 293.999 L 268.056 370.074 L 425.991 199.365"
              stroke="#3e6177"
              strokeWidth="35"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        
        {/* Decorative Trait Lines */}
        <div className="traits-layer">
          <div className="trait trait-1"></div>
          <div className="trait trait-2"></div>
          <div className="trait trait-3"></div>
          <div className="trait trait-4"></div>
        </div>
        
        {/* Firefly Elements */}
        <div className="fireflies-layer">
          <div className="firefly firefly-1"></div>
          <div className="firefly firefly-2"></div>
          <div className="firefly firefly-3"></div>
        </div>
        
      </div>
      
      <div className="click-instruction">
        Click to animate
      </div>
    </div>
  );
};

export default CssAnimationLottieJson;
