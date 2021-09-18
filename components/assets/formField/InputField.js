import styles from "../assets.module.css";

const InputField = (props) => {
  return (
    <div className={styles.form__item}>
      <label htmlFor={props.for}>{props.label}</label>
      <input
        type={props.type || text}
        id={props.id}
        ref={props.refer}
        value={props.value}
        placeholder={props.placeholder}
        minLength={props.minL || 8}
        maxLength={props.maxL || 30}
        required={true}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default InputField;
