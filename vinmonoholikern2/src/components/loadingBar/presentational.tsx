import React, { FunctionComponent } from "react";
import "./loadingBar.scss";

const LoadingBar: FunctionComponent = () => {
  return(
    <div id="loading-container">
      <div id="loading-bar">
        <span className="loading-ball ball-1"></span>
        <span className="loading-ball ball-2"></span>
        <span className="loading-ball ball-3"></span>
      </div>
    </div>
  );
};

export default LoadingBar;
