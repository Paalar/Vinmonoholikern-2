import React, { FunctionComponent } from "react";
import "./loadingBar.scss";

const LoadingBar: FunctionComponent = (): JSX.Element => {
  return (
    <div id="loading-container">
      <div id="loading-bar">
        <span className="loading-ball ball-1" />
        <span className="loading-ball ball-2" />
        <span className="loading-ball ball-3" />
      </div>
    </div>
  );
};

export default LoadingBar;
