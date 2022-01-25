function Card(props) {
  const classes = "card " + props.className; // Importing existed classname and add card
  return <div className={classes}>{props.children}</div>;
}

export default Card;
