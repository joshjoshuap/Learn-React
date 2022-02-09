import React from "react";

// retrieve data from card.jsx <Details detailinfo/>
function Details(props) {
  return <p className="info">{props.detailInfo}</p>;
}

export default Details;
