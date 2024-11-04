import { ChevronDown, ChevronUp } from "lucide-react";
import { ChevronBtnTypes } from "./types";

const ChevronBtn: React.FC<ChevronBtnTypes> = ({ isOpen, onToggle }) => {
  const Icon = isOpen ? ChevronUp : ChevronDown;
  return (
    <button
      type="button"
      className="rounded-md p-2 hover:bg-gray-100"
      onClick={onToggle}
    >
      <Icon className="size-4" />
    </button>
  );
};

export default ChevronBtn;
