import style from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onConfirm}></div>
      <Card className={style.modal}>
        <header className={style.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.action}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
