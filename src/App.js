import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Logo from "./components/Logo/Logo";
import NotFound from "./pages/NotFound";
import Basket from "./pages/Basket";

function App() {
  return (
    <div className="App">
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
