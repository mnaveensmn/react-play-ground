import React from "react";
import { Box, Stack } from "@mui/material";
import "./CssAnimationLottie.css";

const CssAnimationLottie = () => {
  return (
    <Stack alignItems={"center"} width="100%" height="100%">
      <Box className="css-lottie-circle-box" />
      <div className="css-lottie-checkmark-container">
        <div className="css-lottie-checkmark">
          <div className="css-lottie-checkmark-tick"></div>
        </div>
      </div>
    </Stack>
  );
};

export default CssAnimationLottie;
