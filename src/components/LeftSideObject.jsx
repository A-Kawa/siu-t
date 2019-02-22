import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";
import { LoaderSpinner } from "./LoaderSpinner";

export const SubObject = props => {
  const context = useContext(Context);
  const [, updateState] = useState();
  const [currentElements, setCurrentElements] = useState(
    context.getCurrentElements()
  );
  let pagesNumber = [];
  for (let i = 1; i < Math.ceil(context.myState.length / 12 + 1); i++) {
    pagesNumber.push(i);
  }
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
      {pagesNumber.map(number => {
        return (
          <Link key={number} to={"/" + props.props.picture + "/" + number}>
            <button
              onClick={() => {
                context.setPage(number);
                updateState();
              }}
              key={number}
              id={number}
            >
              {number}
            </button>
          </Link>
        );
      })}
    </div>
  );
};
