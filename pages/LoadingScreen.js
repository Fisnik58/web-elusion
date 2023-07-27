// LoadingScreen.js
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="loading-screen d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <img src="/ElusionLogopng"/>
    <h1>Loading...</h1>
  </div>
  );
};

export default LoadingScreen;