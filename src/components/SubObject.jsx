import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";

export const SubObject = props => {
  const context = useContext(Context);
  const [, updateState] = useState();
  const elementsPerPage = 11;
  const [currentElements, setCurrentElements] = useState(
    context.getCurrentElements()
  );

  let pagesNumber = [];
  for (
    let i = 1;
    i < Math.ceil(context.myState.length / elementsPerPage);
    i++
  ) {
    pagesNumber.push(i);
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
                to={"/photo/" + el.id + "/" + context.currentPage}
                key={el.id}
                value={el.title}
              >
                {el.title}{" "}
              </Link>
            </li>
          );
        })
      ) : (
        <h1>zzz</h1>
      )}
      {pagesNumber.map(number => {
        return (
          <Link
            key={number}
            to={"/photo/" + props.props.picture + "/" + number}
          >
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
