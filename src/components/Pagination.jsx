import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/context";

export const Pagination = props => {
  const context = useContext(Context);
  const [, updateState] = useState();
  console.log(context);
  console.log(props);
  let pagesNumber = [];

  const pagesPush = (start, end) => {
    for (let i = start; i < end; i++) {
      pagesNumber.push(i);
    }
  };

  if (context.currentPage) {
    if (context.currentPage === Math.ceil(context.myState.length / 12 + 1)) {
      for (let i = context.currentPage; i > context.currentPage - 10; i--) {
        pagesNumber.push(i);
      }
    } else {
      console.log(parseInt(context.currentPage) + 1);
      for (
        let i = parseInt(context.currentPage);
        i < parseInt(context.currentPage) + 5;
        i++
      ) {
        if (i <= Math.ceil(context.myState.length / 12 + 1)) {
          pagesNumber.push(i);
        }
      }
      for (
        let i = parseInt(context.currentPage) - 1;
        i > parseInt(context.currentPage) - 5;
        i--
      ) {
        if (i >= 1) {
          pagesNumber.push(i);
        }
      }
    }
  } else {
    pagesPush(1, 10);
  }

  pagesNumber.sort(function(a, b) {
    return a - b;
  });

  console.log(pagesNumber);
  return pagesNumber.map(number => {
    return (
      <Link
        onClick={() => {
          context.setPage(number);
          updateState();
        }}
        key={number}
        to={"/" + props.props.picture + "/" + number}
      >
        {" " + number + " "}
      </Link>
    );
  });
};
