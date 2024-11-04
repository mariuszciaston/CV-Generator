import { useState } from "react";
import Card from "./Card";
import cardDetails from "./cardDetails";

const Cards = () => {
  const [openCard, setOpenCard] = useState<string | null>(
    "Personal Information",
  );

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
        />
      ))}
    </div>
  );
};

export default Cards;
