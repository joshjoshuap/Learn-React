import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${style.Card} ${props.className}`}>{props.children /* This is the content inside Card */ }</div>
  );
};

export default Card;
