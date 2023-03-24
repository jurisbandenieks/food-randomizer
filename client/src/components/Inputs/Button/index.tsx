import "./styles.scss";

interface IButton {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  classes?: string;
}

const ButtonFC: React.FC<IButton> = ({
  type = "button",
  disabled = false,
  children,
  classes = ""
}) => {
  return (
    <button className={`btn ${classes}`} type={type} disabled={disabled}>
      <span>{children}</span>
    </button>
  );
};

export default ButtonFC;
