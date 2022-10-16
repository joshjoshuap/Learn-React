import './App.css';
import {useState} from "react";

function App() {
  const [inputName, setInput] = useState("");
  const [name, setName] = useState("");

  let getValue = (event) => {
    setInput(event.target.value);
  }

  let changeName = (event) => {
    setName(inputName);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <form onClick={changeName}>
        <input onChange={getValue} type="text" placeholder="What is your name" value={inputName}/>
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
