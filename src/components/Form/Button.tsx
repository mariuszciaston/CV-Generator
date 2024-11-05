import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ text, className = "bg-gray-500" }) => {
  return (
    <button
      type="button"
      className={`flex-1 text-nowrap rounded-md px-4 py-2 text-sm font-medium text-white ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
