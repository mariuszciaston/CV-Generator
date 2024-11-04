import React, { useState } from "react";
import InputFields from "./InputFields";
import ChevronBtn from "./ChevronBtn";
import { CardTypes } from "./types";

const Card: React.FC<CardTypes> = ({ title, Icon, isOpen: initialIsOpen }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4 rounded-md border bg-white p-4 shadow">
      <div className="flex items-center justify-between text-xl font-medium">
        <div className="flex items-center gap-2">
          {Icon && <Icon />}
          <div>{title}</div>
        </div>
        <ChevronBtn isOpen={isOpen} onToggle={toggleOpen} />
      </div>
      <InputFields isOpen={isOpen} title={title} />
    </div>
  );
};

export default Card;
