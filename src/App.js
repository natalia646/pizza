import { useEffect, useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import PizzaBlock from "./components/Pizza Block/PizzaBlock";

function App() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    fetch(
      "https://file.notion.so/f/s/36ad4e93-800e-451b-9831-ae6abe1b28ef/pizzas.json?id=e934efcc-4042-481d-9d73-76f227f1696e&table=block&spaceId=b3238354-86d5-4ba6-9ad7-eb01112a9acd&expirationTimestamp=1690034400000&signature=5pGHIuykT4IFiZ5slxDzRvjDeCFa2LQjbO1ZBaZNn_M&downloadName=pizzas.json"
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  },[])



  return (
    <div className="App">
      <Categories />
      <PizzaBlock items = {items}/>
    </div>
  );
}

export default App;
