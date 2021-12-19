import Colorplate from './Colorplate';
import Input from './Input'
import './App.css';
import {useState, useRef} from 'react';
import colorNames from "colornames";
import Background from './Background';

function App() {

  const [color, setcolor] = useState('');
  const [hexV, setHexV] = useState('');
  const [bStyle, setBStyle] = useState('lightgreen');
  const [rStyle, setRStyle] = useState('fade 20s infinite');

  document.body.style.backgroundColor = bStyle;
  document.body.style.animation = rStyle;

  const handleChange = (e) =>{
    setcolor(e.target.value);
    setHexV(colorNames(e.target.value));
  }

  const inputRef = useRef();

  return (
    <center className="App">
      <Background 
        setBStyle={setBStyle}
        setRStyle={setRStyle}
        inputRef={inputRef}
      />
      <Colorplate 
        bg={color}
        hex={hexV}
      />
      <Input 
        handleChange={handleChange}
        inputRef={inputRef}
      />
    </center>
  );
}

export default App;
