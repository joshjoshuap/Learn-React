import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./entry";

// Create entry tag with correspoind data
function createEntry(emojipedias) {
  return (
    // Sending props to entry.js
    <Entry
      emoji={emojipedias.emoji}
      name={emojipedias.name}
      description={emojipedias.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {emojipedia.map(createEntry)}
      {/* Loop the emojipedia array and pass the data to create Entry*/}
    </div>
  );
}

export default App;
