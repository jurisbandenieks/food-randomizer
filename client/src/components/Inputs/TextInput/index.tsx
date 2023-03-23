import "./styles.scss";

interface ITextInput {
  placeholder: string;
  ref: React.Ref<HTMLInputElement>;
  name: string;
  label: string;
  type: string;
  onChange: (value: string | number) => void;
}

const TextInput: React.FC<ITextInput> = ({
  placeholder,
  ref = null,
  name,
  label,
  onChange
}) => {
  return (
    <div className="form__group">
      <input
        className="form__field"
        type="text"
        ref={ref}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default TextInput;
