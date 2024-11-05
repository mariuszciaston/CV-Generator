import { InputFieldTypes } from "../types";

const InputField: React.FC<InputFieldTypes> = ({
  label,
  type,
  id,
  placeholder,
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
      />
    </div>
  );
};

export default InputField;
