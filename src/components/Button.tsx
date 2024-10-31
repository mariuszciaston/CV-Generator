import { ButtonTypes } from "./types";

const Button: React.FC<ButtonTypes> = ({ text, className }) => {
  return (
    <button
      type="button"
      className={`flex-1 text-nowrap rounded-md px-4 py-2 text-sm font-medium text-white ${className ? className : "bg-gray-500"}`}
    >
      {text}
    </button>
  );
};

export default Button;
