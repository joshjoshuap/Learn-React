import button from "./Button.module.css"

function App() {
  return (
    <div>
      <button className={`${button.btn} ${button.red}`}>Red Button</button>
      <button className={`${button.btn} ${button.blue}`}>Blue Button</button>
      <button className={`${button.btn} ${button.green}`}>Green Button</button>

    </div>
  );
}

export default App;
