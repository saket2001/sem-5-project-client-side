import styles from "../assets.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={(props.styles, styles.button)}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
