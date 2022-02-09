import React from "react";

// props will retrieve data from app.jsx <Details /> attributes
function Details(props) {
  return <p className="info">{props.detailInfo}</p>;
}

export default Details;
