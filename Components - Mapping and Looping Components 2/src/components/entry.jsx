import React from "react";

// Retrieve props data from app.jsx create entry <Entry /> tag
function Entry(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.description}</dd>
      </div>
    </dl>
  );
}

export default Entry;
