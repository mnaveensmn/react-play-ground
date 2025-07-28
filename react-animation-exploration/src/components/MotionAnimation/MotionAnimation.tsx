import React from "react";
import { Box, Stack } from "@mui/material";
import "./MotionAnimation.css";
import ConfettiCheckmark from "../ConfettiCheckmark/ConfettiCheckmark";

const MotionAnimation = () => {
  return (
    <Stack alignItems={"center"} width="100%" height="100%">
      <Box
        className="motion-circle-box"
      />
      <div className="motion-checkmark">
        <ConfettiCheckmark
          duration={0.6}
          confettiCount={60}
        />
      </div>
    </Stack>
  );
};

export default MotionAnimation;
