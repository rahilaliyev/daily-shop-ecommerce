import React from "react";
import "./Loading.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import LottieLoading from "./LottieLoader.json";

const Loading = () => {
  return (
    <div className="loading">
      <Player
        autoplay
        loop
        src={LottieLoading}
        style={{
          height: "300px",
          width: "300px",
        }}
      />
      <span> Loading ...</span>
    </div>
  );
};

export default Loading;
