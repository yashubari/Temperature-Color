import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";


function App() {
  const[temperature, setTemperature] = useState(10)
  const[temperatureColor, setTemperatureColor] = useState('cold')

  const increment = () =>{
    const newtemperature = (temperature+1)
    setTemperature(newtemperature)
    if(newtemperature >=10)
    setTemperatureColor('warm')
  }
  const decrement = () =>{
    const newtemperature = (temperature-1)
    setTemperature(newtemperature)
    if (newtemperature<=10){
      setTemperatureColor("cold")
    }
  }

  return (
    <div className="App">
      <div>
        <h2 className={`${temperatureColor}`}>{temperature}</h2>
      </div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
