import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";
import { LoaderSpinner } from "./LoaderSpinner";
import { Pagination } from "./Pagination";

export const SubObject = props => {
  const context = useContext(Context);
  console.log(props);
  const [currentElements, setCurrentElements] = useState(
    context.getCurrentElements()
  );

  let currentPage = context.currentPage;
  if (!currentPage) {
    currentPage = 1;
  }
  useEffect(() => {
    setCurrentElements(context.getCurrentElements());
  }, [context.currentPage]);

  return (
    <div className="sub-main">
      {currentElements.length ? (
        currentElements.map(el => {
          return (
            <li key={el.id}>
              <Link
                to={"/" + context.myState.indexOf(el) + "/" + currentPage}
                key={el.id}
                value={el.title}
              >
                {el.title}{" "}
              </Link>
            </li>
          );
        })
      ) : (
        <LoaderSpinner />
      )}
      <div style={{ marginTop: "15px" }}>
        <Pagination props={props.props} />
      </div>
    </div>
  );
};
