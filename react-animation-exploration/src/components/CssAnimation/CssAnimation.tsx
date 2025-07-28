import React from "react";
import { Box, Stack } from "@mui/material";
import "./CssAnimation.css";

const CssAnimation = () => {
  return (
    <Stack alignItems={"center"} width="100%" height="100%">
      {/* Green Circle - matches motion-circle-box */}
      <Box className="css-circle-box" />
      
      {/* Checkmark Container - matches motion-checkmark */}
      <div className="css-checkmark">
        {/* SVG Checkmark with circle background */}
        <svg
          className="css-checkmark-svg"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 99 99"
        >
          <g clipPath="url(#clip0_4_96)">
            {/* Green Circle Background */}
            <circle
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="#8CDF6F"
            />
            
            {/* Checkmark Path */}
            <path
              className="css-checkmark-path"
              d="M20 49 L42 71 L79 34"
              stroke="#000000"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_96">
              <rect fill="white" height="99" width="99" />
            </clipPath>
          </defs>
        </svg>
        
        {/* Confetti particles */}
        <div className="css-confetti">
          {Array.from({ length: 60 }, (_, i) => (
            <div key={i} className={`css-confetti-piece css-confetti-${i + 1}`}></div>
          ))}
        </div>
      </div>
    </Stack>
  );
};

export default CssAnimation;
