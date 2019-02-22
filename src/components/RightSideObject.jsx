import React, { useContext } from "react";
import { Context } from "../store/context";
import "../layout/RightSideObject.scss";

export const LeftSideObject = props => {
  const context = useContext(Context);

  return props.props.picture ? (
    context.myState[props.props.picture] ? (
      <div className="left-side-object">
        <img
          className="picture"
          alt="Pic"
          src={context.myState[props.props.picture].thumbnailUrl}
        />
      </div>
    ) : (
      <div />
    )
  ) : (
    <div />
  );
};
