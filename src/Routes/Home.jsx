/* eslint-disable no-unused-vars */
import { useGlobalContex } from "../Components/utils/global.context";
import Card from "../Components/Card";
import "../Components/css/home.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useGlobalContex();
  console.log(state);
  const dataArray = state.data;
  return (
    <main className="home">
      <h1 className={`tittle`}>OUR DENTIST LIST</h1>
      <div className="card-grid">
        {dataArray.length > 0 &&
          dataArray.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              username={item.username}
              id={item.id}
            />
          ))}
      </div>
    </main>
  );
};

export default Home;
