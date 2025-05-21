import "./App.css";
import HowWeWork from "./components/HowWeWork";
import Services from "./components/Services";
import StartBlock from "./components/StartBlock";


function App() {
  return (
    <div className="app">
      <StartBlock/>
    <Services/>
    <HowWeWork/>
    </div>
  );
}

export default App;
