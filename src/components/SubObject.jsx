import React, { useState, useEffect } from "react";
import { getFromApi } from "../utils/getFromApi";

export const SubObject = () => {
  const [state, setState] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    elementsPerPage: 12,
    indexOfFistTodo: 1,
    indexOfLastTodo: 12
  });

  useEffect(() => {
    getFromApi().then(res => {
      setState(res);
    });
  }, []);
  console.log(state);
  return <h1>xd</h1>;
};
