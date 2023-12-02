import { useGlobalContex } from "./Components/utils/global.context";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";

function App() {
  const { state } = useGlobalContex();
  return (
    <div className={`app ${state.theme === "dark" ? "darkB" : "ligthB"}`}>
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route exact path="/Favs" element={<Favs/>} />
          <Route exact path="/Dentist/:id" element={<Detail/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}
export default App;
