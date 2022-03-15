import style from './Card.module.css';

const Card = (props) => {
  return (
    <div className={style.card}>
      {props.children} {/* content inside <Card></Card> */}
    </div>
  );
}

export default Card;