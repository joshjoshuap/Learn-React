import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={style.button}
      type={props.type || "submit"}
      onClick={props.onClick}
    >
      {props.children /* This is the text inside the button */}
    </button>
  );
};

export default Button;
