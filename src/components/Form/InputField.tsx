import { InputFieldProps } from "../types";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="rounded-md border px-3 py-2"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
