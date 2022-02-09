import React from "react";
import Avatar from "./avatar";
import Details from "./details";

// props will retrieve data from app.jsx <card> attributes
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />{" "}
        {/* <Avatar /> will pass attributes to avatar.jsx */}
      </div>
      <div className="bottom">
        {/* <Details /> will pass attributes to detail.jsx*/}
        <Details detailInfo={props.number} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
