import { TextareaProps } from "../types";

const Textarea: React.FC<TextareaProps> = ({ name, id, placeholder }) => {
  return (
    <textarea
      className="h-32 min-h-16 rounded-md border px-3 py-2"
      name={name}
      id={id}
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
