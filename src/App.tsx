import { useState } from 'react';
import './App.css';
import Product from './components/Product';

function App() {
  const [cnt, setCounter] = useState<number>(0);
  const [txt, changeTxt] = useState<string>("");

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>):void => {
    setCounter(cnt+1);
  }

  const inputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    changeTxt(e.target.value);
  }
  return (
    <div className="App">
      <Product pCode = {1} pName = {"Apples"} qty = {10}/>
      <h2>{cnt}</h2>
      <button onClick={handleClick}>Increment</button>
      <hr />
      <h3>{txt}</h3>
      <hr />
      <input type="text" onChange={inputChange}/>
    </div>
  );
}

export default App;
