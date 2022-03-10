const Card = (props) => {
  const classes = `card ${props.className}`; // calling existed classname and add card
  return <div className={classes}>{props.children}</div>;
};

export default Card;
