import React from "react";
import { Box, Stack } from "@mui/material";
import "./LottieAnimation.css"; // Make sure this import is present
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottieAnimation = () => {
  return (
    <Stack alignItems={"center"} width="100%" height="100%">
      <Box
        className="lottie-circle-box"
      />
      <DotLottieReact
        className="lottie-checkmark"
        key={0}
        autoplay={true}
        loop={true}
        src="/animations/checkmark.lottie"
        speed={1}
      />
    </Stack>
  );
};

export default LottieAnimation;
