import Colorplate from './Colorplate';
import Input from './Input'
import './App.css';
import {useState} from 'react';
import colorNames from "colornames";

function App() {
  
  const [color, setcolor] = useState('');
  const [hexV, setHexV] = useState('');

  const handleChange = (e) =>{
    setcolor(e.target.value);
    setHexV(colorNames(e.target.value));
  }

  return (
    <center className="App">
      <Colorplate 
        bg={color}
        hex={hexV}
      />
      <Input 
        handleChange={handleChange}
      />
    </center>
  );
}

export default App;
