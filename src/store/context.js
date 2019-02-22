import React, { useState } from "react";

export const Context = React.createContext();
export const Provider = props => {
  const [myState, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Context.Provider
      value={{
        myState,
        currentPage,
        getData: data => {
          setState(data);
        },
        setPage: number => {
          setCurrentPage(number);
        },
        getCurrentElements: () => {
          return myState.slice(currentPage * 12 - 12, currentPage * 12);
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
