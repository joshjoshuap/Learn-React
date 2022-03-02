import './App.css';
import {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  let addCount = () => {
    setCount(count + 1);
  }

  let decCount = () => {
    setCount(count - 1);
  }

return (
  <div>
    <p class="count">{count}</p>
    <button class="btn-count add" onClick={addCount}> + </button>
    <button class="btn-count dec" onClick={decCount}> - </button>
  </div>
)
}

export default Counter;