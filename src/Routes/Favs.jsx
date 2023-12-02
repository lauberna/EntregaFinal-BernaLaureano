import Card from "../Components/Card";
import { useGlobalContex } from "../Components/utils/global.context";
import "../Components/css/favorites.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useGlobalContex()
  console.log(state.favorites);
  return (
    <div className="favlist">
      <h1 className={`favs`}>FAVORITES</h1>
      <div className="card-grid">
      {state.favorites.length > 0 ?
          state.favorites.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              username={item.username}
              id={item.id}
            />
          )): <h1>No hay favs</h1>
        }
      </div>
    </div>
  );
};

export default Favs;
