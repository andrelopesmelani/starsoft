import styles from "./Button.module.scss";

interface ButtonType {
  text: string;
  onClick: () => void;
  color?: "primary" | "secondary";
  disabled?: boolean;
}

const Button = ({ text, onClick, color = "primary", disabled}: ButtonType) => {
    const buttonColor = disabled ? "secondary" : color;

    return (
      <button
        onClick={disabled ? undefined : onClick}
        className={`${styles.button} ${styles[buttonColor]}`}
        disabled={disabled}
      >
        {text}
      </button>
  );
};

export default Button;
