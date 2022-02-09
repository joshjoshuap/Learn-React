import React from "react";
import contacts from "../contacts";
import Card from "./card";
import Avatar from "./avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png" />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        number={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        number={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        number={contacts[2].phone}
        email={contacts[2].email}
      />
      {/* contacts will retrieve the data array from contacts.js */}
      {/* <card> will pass attributes to props of card.jsx*/}
    </div>
  );
}

export default App;
