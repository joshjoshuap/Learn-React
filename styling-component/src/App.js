import styled, {css} from 'styled-components'

function App() {

  const Button = styled.button`
  padding: 20px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 10px;
  font-size: 18px;
  font-weight: 700;

  ${props => props.red && css`background: red; color: white;`}; /* Red Button */
  ${props => props.orange && css`background: orange; color: white;`}; /* Orange Button */
  ${props => props.yellow && css`background: yellow; color: white;`}; /* Yellow Button */
  ${props => props.green && css`background: green; color: white;`}; /* Green Button */
  ${props => props.blue && css`background: blue; color: white;`}; /* Blue Button */
  ${props => props.brown && css`background: brown; color: white;`}; /* Brown Button */

  `;
  return (
    <div>
      <Button> Normal Button </Button>
      <Button red> Red Button </Button>
      <Button orange> Orange Button </Button>
      <Button yellow> Yellow Button </Button>
      <Button green> Green Button </Button>
      <Button blue> Blue Button </Button>
      <Button brown> Brown Button </Button>
    </div>
  );
}

export default App;
