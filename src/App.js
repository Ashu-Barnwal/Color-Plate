import Colorplate from './components/Colorplate';
import Input from './components/Input'
import './style/App.css';
import {useState, useRef} from 'react';
import colorNames from "colornames";
import Background from './components/Background';
import Banner from './components/Banner';

function App() {

  const [color, setcolor] = useState('');
  const [hexV, setHexV] = useState('');
  const [bStyle, setBStyle] = useState('#c0c0c0');
  const [rStyle, setRStyle] = useState('');
  const [cName, setCName] = useState('');

  document.body.style.backgroundColor = bStyle;
  document.body.style.animation = rStyle;
  document.title = 'COLOR PLATE';

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
        setClassName={setCName}
        cName={cName}
        inputRef={inputRef}
      />
      <Colorplate 
        bg={color}
        hex={hexV}
        cName={cName}
      />
      <Input 
        handleChange={handleChange}
        inputRef={inputRef}
        cName={cName}
      />
      <Banner
        cName={cName}
      />
    </center>
  );
}

export default App;
