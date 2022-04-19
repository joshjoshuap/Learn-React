import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  }


   return (<div>
     <h2>Hello World</h2>
     {!changeText && <p>Paragraph</p>}
     {changeText && <p>Paragraph changed</p>}
     <button onCLick={changeTextHandler}>Change Text</button>
   </div>)
}

export default Greeting;