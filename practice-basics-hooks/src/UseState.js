import { useState } from "react";

const UseState = () => {
const [userName, setUserName] = useState("");
const [inputName, setUserInputName] = useState("");

const getName = (event) => {
    setUserInputName(event.target.value);
}

const changeName = (event) => {
    setUserName(inputName);
    event.preventDefault();
}
return (
    <div>
       <h1> Hello, {userName}</h1>
        <form onClick={changeName}>
            <input onChange={getName} type="text" value={inputName} name="userName" placeholder="Enter Your Name"/>
            <button type="Submit">Submit</button>
        </form>
    </div>
)
}

export default UseState;