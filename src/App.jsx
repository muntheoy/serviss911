import React from "react";
import "./App.css";
import carIcon from "./assets/icons/car.svg";
import lockIcon from "./assets/icons/lock.svg";
import doorIcon from "./assets/icons/door.svg";
import ServicesSection from "./components/ServicesSection";
import Button from "./components/Button";
import callIcon from "./assets/icons/fluent_person-call-20-filled.svg";
import RequestCard from "./components/RequestCard";
import BlockHeader from "./components/BlockHeader";

function App() {
  return (
    <div className="app">
     <BlockHeader
     showButtons={true}
     title = "Услуги"
     /> 
    </div>
  );
}

export default App;
