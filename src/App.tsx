import { useEffect, useState } from 'react';
import './App.css';
import Product from './components/Product';

function App() {
  const [cnt, setCounter] = useState<number|string|null|boolean>("");
  useEffect(() => {
    setCounter(true);
  }, []);
  return (
    <div className="App">
      <Product pCode = {1} pName = {"Apples"} qty = {10}/>
      <h2>{JSON.stringify(cnt)}</h2>
    </div>
  );
}

export default App;
