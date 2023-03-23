import "./styles.scss";

interface ISwitchInput {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const SwitchInput: React.FC<ISwitchInput> = ({
  label,
  value = false,
  onChange
}) => {
  return (
    <label className="form__switch mt-sm">
      <input
        type="checkbox"
        checked={value}
        value={value ? "on" : "off"}
        onChange={() => onChange(!value)}
      />
      <span>{label}</span>
    </label>
  );
};

export default SwitchInput;
