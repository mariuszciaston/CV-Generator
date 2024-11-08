import { TextareaProps } from "../types";

const Textarea: React.FC<TextareaProps> = ({
  name,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea
      className="h-64 min-h-16 rounded-md border px-3 py-2 "
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default Textarea;
