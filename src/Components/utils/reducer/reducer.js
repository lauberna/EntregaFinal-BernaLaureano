import { addFav, changeTheme, removeFav } from "./functions";

/* eslint-disable no-case-declarations */
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: [...action.payload] };
    case "SET_DETAIL":
      return { ...state, detail: action.payload };
    case "ADD_FAV":
      return addFav(state, action);
    case "REMOVE_FAV":
      return removeFav(state, action);
    case "CHANGE_THEME":
      return changeTheme(state, action);
  }
};
