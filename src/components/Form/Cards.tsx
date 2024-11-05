import { useState } from "react";
import Card from "./Card";
import cardDetails from "./cardDetails";
import { CardProps } from "../types";

const Cards: React.FC<CardProps> = ({ fullName, onFullNameChange }) => {
  const [openCard, setOpenCard] = useState<string | null>(cardDetails[0].title);

  const handleToggle = (title: string) => {
    setOpenCard((prev) => (prev === title ? null : title));
  };

  return (
    <div id="Cards" className="flex flex-col flex-wrap gap-4">
      {cardDetails.map(({ title, Icon }) => (
        <Card
          key={title}
          title={title}
          Icon={Icon}
          isOpen={openCard === title}
          onToggle={handleToggle}
          fullName={fullName}
          onFullNameChange={onFullNameChange}
        />
      ))}
    </div>
  );
};

export default Cards;
