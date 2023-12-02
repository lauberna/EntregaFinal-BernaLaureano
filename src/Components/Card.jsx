/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContex } from "./utils/global.context";
import { FaHeart } from "react-icons/fa";
import "../Components/css/card.css"

const Card = ({ name, username, id}) => {
  const {state, dispatch} = useGlobalContex()
  const [us] = state.data.filter(item => item.id === Number(id))

  const isFav = state.favorites.some(fav => fav.id === id)

  const addFav = () => {
    dispatch({type:"ADD_FAV", payload: us})

  };

  const removeFav = () => {
    dispatch({type:"REMOVE_FAV", payload: us})

  };
  return (
    <div className={`card ${state.theme == "dark" ? "darkCard" : "ligthCard"}`}>
      <Link className="data" onClick={()=> dispatch({type: "SET_DETAIL", payload: us})} to={`/Dentist/${id}`}>
        <img className="img" src="/images/doctor.jpg" alt="" />
        <h2>{name}</h2>
        <p>@{username}</p>
      </Link>
      {
        <FaHeart onClick={!isFav? addFav: removeFav} className={`heart ${isFav ? "liked" : ""}`}/>
      }
    </div>
  );
}

export default Card;
