import React from "react";
import spinner from "../assets/ajax-loader.gif";
const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
};

export const LoaderSpinner = () => {
  return (
    <div style={{ ...style }}>
      <img src={spinner} alt="Loading..." />
    </div>
  );
};
