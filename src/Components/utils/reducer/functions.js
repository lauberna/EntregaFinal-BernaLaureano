
export const addFav = (state, action) => {
  const isAlreadyAdded = state.favorites.some(
    (favorite) => favorite.id === action.payload.id
  );
  if (!isAlreadyAdded) {
    const newFavorites = [...state.favorites, action.payload];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    console.log("Agregado a favoritos:", newFavorites);
    return { ...state, favorites: newFavorites };
  } else {
    console.log("Esta tarjeta ya está en favoritos");
    return state;
  }
};

export const removeFav = (state, action) => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const newFavorites = favorites.filter(fav => fav.id !== action.payload.id);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
  console.log("Eliminado de favoritos:", newFavorites);
  return { ...state, favorites: newFavorites };
};

// eslint-disable-next-line no-unused-vars
export const changeTheme = (state, action) => {
  if (state.theme == "ligth") {
    return { ...state, theme: "dark" };
  }
  else {
    return { ...state, theme: "ligth" };
  }
};