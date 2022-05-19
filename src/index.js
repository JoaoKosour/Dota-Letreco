import ReactDOM from "react-dom/client";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer.js";
import Header from "./Components/Header/Header.js";
import Login from "./Components/Login/Login";
import Dotreko from "./Components/Dotreko/Dotreko";
import Letrekomon from "./Components/Letrekomon/Letrekomon";
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Dotreko" element={<Dotreko />} />
      <Route path="Letrekomon" element={<Letrekomon />} />
      <Route path="Login" element={<Login />} />
    </Routes>
    <Footer />
    
  </BrowserRouter>
);
