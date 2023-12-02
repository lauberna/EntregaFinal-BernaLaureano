/* eslint-disable no-case-declarations */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { reducer } from "./reducer/reducer";

export const initialState = {
  theme: "ligth",
  data: [],
  detail: null,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};



export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const url = `https://jsonplaceholder.typicode.com/users?_limit=20`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_DATA", payload: data });
      });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContex = () => useContext(ContextGlobal);
