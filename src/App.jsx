import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>;
}

export default App;
