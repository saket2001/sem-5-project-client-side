import styles from "./Loader.module.css";

export default function Loader({ text, textColour }) {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <p style={{ color: textColour ? textColour : "black" }}>{text}</p>
    </div>
  );
}
