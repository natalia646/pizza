import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Logo from "./components/Heder/Logo";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Logo />
      <NotFound/>
      {/* <Home /> */}
    </div>
  );
}

export default App;
