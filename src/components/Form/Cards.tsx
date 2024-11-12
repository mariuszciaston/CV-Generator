import { useState } from "react";
import Card from "./Card";
import cardDetails from "./cardDetails";
import { InputSectionProps, InputChangeEvent } from "../types";

const Cards: React.FC<InputSectionProps> = ({ data, onDataChange }) => {
  const [openCard, setOpenCard] = useState<string | null>(cardDetails[0].title);

  const handleToggle = (title: string) => {
    setOpenCard((prev) => (prev === title ? null : title));
  };

  const handleFieldChange =
    (field: keyof typeof data) => (e: InputChangeEvent) => {
      onDataChange(field, e.target.value);
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
          fullName={data.fullName}
          jobTitle={data.jobTitle}
          address={data.address}
          email={data.email}
          phoneNumber={data.phoneNumber}
          website={data.website}
          summary={data.summary}
          skills={data.skills}
          onFullNameChange={handleFieldChange("fullName")}
          onJobTitleChange={handleFieldChange("jobTitle")}
          onAddressChange={handleFieldChange("address")}
          onEmailChange={handleFieldChange("email")}
          onPhoneNumberChange={handleFieldChange("phoneNumber")}
          onWebsiteChange={handleFieldChange("website")}
          onSummaryChange={handleFieldChange("summary")}
          onSkillsChange={handleFieldChange("skills")}
        />
      ))}
    </div>
  );
};

export default Cards;
