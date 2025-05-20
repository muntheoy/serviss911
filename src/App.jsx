import React from "react";
import "./App.css";
import carIcon from "./assets/icons/car.svg";
import lockIcon from "./assets/icons/lock.svg";
import doorIcon from "./assets/icons/door.svg";
import ServicesSection from "./components/ServicesSection";
import Button from "./components/Button";
import { FiArrowRight, FiHeart } from "react-icons/fi";

function App() {
  return (
    <div className="app">
      <Button
        variant="filled"
        icon={<FiHeart />}
        onClick={() => console.log("Лайк!")}
      >
        Добавить в избранное
      </Button>

         <Button
        variant="outlined"
        icon={<FiHeart />}
        onClick={() => console.log("Лайк!")}
      >
        Добавить в избранное
      </Button>
      <Button
  variant="icon"  // ← важно указать variant="icon"
  icon={<FiHeart />}
  ariaLabel="Добавить в избранное"
  onClick={() => console.log("Лайк!")}
/>
    </div>
  );
}

export default App;
