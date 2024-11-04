import { useState } from "react";
import {
  User,
  FilePen,
  PencilRuler,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Card from "./Card";

const Cards = () => {
  const [openCard, setOpenCard] = useState<string | null>(
    "Personal Information",
  );

  const handleToggle = (title: string) => {
    setOpenCard((prev) => (prev === title ? null : title));
  };

  return (
    <div id="Cards" className="flex flex-col flex-wrap gap-4">
      <Card
        title="Personal Information"
        Icon={User}
        isOpen={openCard === "Personal Information"}
        onToggle={handleToggle}
      />
      <Card
        title="Summary"
        Icon={FilePen}
        isOpen={openCard === "Summary"}
        onToggle={handleToggle}
      />
      <Card
        title="Experience"
        Icon={Briefcase}
        isOpen={openCard === "Experience"}
        onToggle={handleToggle}
      />
      <Card
        title="Education"
        Icon={GraduationCap}
        isOpen={openCard === "Education"}
        onToggle={handleToggle}
      />
      <Card
        title="Skills"
        Icon={PencilRuler}
        isOpen={openCard === "Skills"}
        onToggle={handleToggle}
      />
    </div>
  );
};

export default Cards;
