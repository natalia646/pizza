import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Logo from "./components/Logo/Logo";
import NotFound from "./pages/NotFound";
import Basket from "./pages/Basket";
import FullDiscrip from "./pages/FullDiscrip";

function App() {

  
  return (
    <div className="App">
      <Logo />
      <Routes>
        <Route path="/pizza" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/pizza/:id" element ={<FullDiscrip/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
