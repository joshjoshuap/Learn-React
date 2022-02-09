import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  function handleChange(event) {
    setText(event.target.value); // set the text to the value type by the user
  }

  function handleClick(event) {
    setName(text); // change the name to the value of text

    event.preventDefault(); // prevent to reload/refresh the form and web
  }

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {name}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={text}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
