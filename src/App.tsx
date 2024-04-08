import { useState } from 'react';
import './App.css';
import Product from './components/Product';

function App() {
  const [cnt, setCounter] = useState<number>(0);
  const [txt, changeTxt] = useState<string>("");
  const [dropTxt, changeDropTxt] = useState<string>("");

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>):void => {
    setCounter(cnt+1);
  }

  const inputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    changeTxt(e.target.value);
  }

  const dropHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
    changeDropTxt(e.target.value);
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
      <hr />
      <h3>{dropTxt}</h3>
      <select onChange={dropHandler}>
        <option value="Apples">Apples</option>
        <option value="Bananas">Bananas</option>
        <option value="Oranges">Oranges</option>
        <option value="Grapes">Grapes</option>
      </select>
    </div>
  );
}

export default App;
