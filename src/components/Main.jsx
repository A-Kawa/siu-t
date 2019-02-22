import React, { useContext, useEffect } from "react";
import { SubObject } from "./LeftSideObject";
import { getFromApi } from "../utils/getFromApi";
import { Context } from "../store/context";
import { LoaderSpinner } from "../components/LoaderSpinner";
import "../layout/Main.scss";
import { LeftSideObject } from "./RightSideObject";

export const Main = ({ match }) => {
  const context = useContext(Context);
  useEffect(() => {
    getFromApi().then(res => {
      context.getData(res);
      context.setPage(match.params.index);
    });
  }, []);

  return (
    <div className="Main">
      <div className="grid-left">
        <div className="left-one">
          <h1 className="text">Welcome back!</h1>
          {!context.myState.length ? (
            <LoaderSpinner />
          ) : context.myState === "Error" ? (
            <h2 style={{ color: "red", textAlign: "center" }}>
              Server nie odpowiada :(
            </h2>
          ) : (
            <SubObject props={match.params} />
          )}
        </div>
      </div>
      <div className="grid-right">
        <div className="right-one">
          <LeftSideObject props={match.params} />
        </div>
      </div>
    </div>
  );
};
