import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./Colleqt.css";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";

const Colleqt = () => {
  const checkmarkLottieRef = useRef<DotLottie | null>(null);
  const bagLottieRef = useRef<DotLottie | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      checkmarkLottieRef.current?.play();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      bagLottieRef.current?.play();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack alignItems={"center"} width="100%" height="100%">
      <DotLottieReact
        key={0}
        className="scan-success"
        autoplay={true}
        loop={false}
        src="/animations/scan_success.lottie"
        speed={1.1}
      />
      <DotLottieReact
        key={1}
        dotLottieRefCallback={(ref) => {
          checkmarkLottieRef.current = ref;
        }}
        className="colleqt-checkmark"
        autoplay={false}
        loop={false}
        src="/animations/checkmark.lottie"
        speed={1}
      />

      <img
        key={2}
        className="shopping-bag"
        src="/animations/shopping_bag.png"
        alt="Shopping Bag"
      />
      <DotLottieReact
        key={3}
        dotLottieRefCallback={(ref) => {
          bagLottieRef.current = ref;
        }}
        className="shopping-bag-animation"
        autoplay={false}
        loop={false}
        src="/animations/shopping_bag.lottie"
        speed={0.8}
      />
    </Stack>
  );
};

export default Colleqt;
