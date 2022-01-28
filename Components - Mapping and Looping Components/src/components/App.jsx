import React from "react";
import contacts from "../contacts";
import Card from "./card";
import Avatar from "./avatar";

function createCard(contacts) {
  return (
    // <card> will pass attributes to props of card.jsx
    <Card
      key={contacts.id}
      id={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      number={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png" />
      {contacts.map(createCard)}
      {/* This will loop the array of contacts with data and loop to create card tag <Create /> */}
    </div>
  );
}

export default App;
