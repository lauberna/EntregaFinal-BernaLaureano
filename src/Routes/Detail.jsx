//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
/* import { useParams } from "react-router-dom"; */
import { useGlobalContex } from "../Components/utils/global.context";
import "../Components/css/detail.css";

const Detail = () => {
  const { state } = useGlobalContex();
  const dent = state.detail;
  return (
    <div className="dCont">
      <div
        className={`contP ${
          state.theme === "dark" ? "darkDetail" : "ligthDetail"
        }`}
      >
        <img className="imgD" src="/images/doctor.jpg" alt="" />
        <div className="info">
          <div className="container">
            <h1>Dentist: {dent.id}</h1>
            <p>name: {dent.name}</p>
            <p>email: {dent.email}</p>
            <p>phone: {dent.phone}</p>
            <p>website: {dent.website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
