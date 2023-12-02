import { useGlobalContex } from "./utils/global.context";
import { MdFavoriteBorder } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { Link } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import "./css/navbar.css";
import "../index.css";

const Navbar = () => {
  const { state, dispatch } = useGlobalContex();

  return (
    <div className={`navigation`}>
      <ul>
        <li className="list">
          <Link className="link" to="/">
            <span className="icon">
              <LuHome />
            </span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li className="list">
          <Link className="link" to="/Contact">
            <span className="icon">
              <LuContact />
            </span>
            <span className="text">Contact</span>
          </Link>
        </li>
        <li className="list">
          <Link className="link" to="/Favs">
            <span className="icon">
              <MdFavoriteBorder />
            </span>
            <span className="text">Favs</span>
          </Link>
        </li>
        <li className="list">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => dispatch({ type: "CHANGE_THEME" })}
            className="link"
          >
            <span className="icon">
              {state.theme == "ligth" ? (
                <FiSun />
              ) : (
                <BsMoon style={{ fontSize: "22px" }} />
              )}
            </span>
            <span className="text">{state.theme}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
