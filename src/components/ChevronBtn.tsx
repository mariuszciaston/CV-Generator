import { ChevronDown, ChevronUp } from "lucide-react";
import { CardTypes } from "./types";

const ChevronBtn: React.FC<Pick<CardTypes, "isOpen">> = ({ isOpen }) => {
  const Icon = isOpen ? ChevronUp : ChevronDown;
  return (
    <button type="button" className="rounded-md p-2 hover:bg-gray-100">
      <Icon className="size-4" />
    </button>
  );
};

export default ChevronBtn;
