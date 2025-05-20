import React from "react";
import "./App.css";
import carIcon from "./assets/icons/car.svg";
import lockIcon from "./assets/icons/lock.svg";
import doorIcon from "./assets/icons/door.svg";
import ServicesSection from "./components/ServicesSection";
import Button from "./components/Button";
import callIcon from "./assets/icons/fluent_person-call-20-filled.svg";
import RequestCard from "./components/RequestCard";

function App() {
  return (
    <div className="app">
      <RequestCard
        stepNumber={1}
        icon={<img src={callIcon} alt="Иконка звонка" className="card-icon" />}
        title="Оставляете заявку"
        description="На сайте в чате, по телефону или в Telegram"
        showButtons={true}
        buttonVariant="filled" // или "outlined", "text"
      />
    </div>
  );
}

export default App;
