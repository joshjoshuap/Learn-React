import './style.css';
import {add, sub, multiply, divide} from "./Math"
import Grid from "./Grid"
import Article from "./Article"

function App() {
  return (
    <div>
      <div class="container"> 
        <h1 class="title"> Math Components </h1>
        <p> Addition: {add(2,3)} </p>
        <p> Subtraction: {sub(2,3)} </p>
        <p> Multiply: {multiply(2,3)} </p>
        <p> Division: {divide(2,3)} </p>
      </div>

      <div class="container">
        <h1 class="title"> Grid Components </h1>
        <Grid />
      </div>

      <div class="container"> 
      <h1 class="title"> Article Components </h1>
        <Article />
      </div>
    </div>
  );
}

export default App;
