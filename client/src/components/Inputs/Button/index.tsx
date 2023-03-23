import "./styles.scss";

interface IButton {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
}

const ButtonFC: React.FC<IButton> = ({
  type = "button",
  disabled = false,
  children
}) => {
  return (
    <button className="btn" type={type} disabled={disabled}>
      <span>{children}</span>
    </button>
  );
};

export default ButtonFC;
