import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  className = "bg-gray-500",
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`flex-1 text-nowrap rounded-md px-4 py-2 text-sm font-medium text-white ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
