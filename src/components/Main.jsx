import React from "react";
import { SubObject } from "./SubObject";
import "../layout/Main.scss";

export const Main = () => {
  return (
    <div className="Main">
      <div className="grid-left">
        <div className="left-one">
          <h1 className="text">Welcome back!</h1>
          <SubObject />
        </div>
      </div>
      <div className="grid-right">
        <div className="right-one">
          <h1>Test2</h1>
        </div>
      </div>
    </div>
  );
};
