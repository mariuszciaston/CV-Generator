import { useState } from "react";
import Card from "./Card";
import cardDetails from "./cardDetails";
import { InputSectionProps } from "../types";

const Cards: React.FC<InputSectionProps> = ({ data, onDataChange }) => {
  const [openCard, setOpenCard] = useState<string | null>(cardDetails[0].title);

  const handleToggle = (title: string) => {
    setOpenCard((prev) => (prev === title ? null : title));
  };

  const handleFieldChange =
    (field: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement>) => {
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
          onFullNameChange={handleFieldChange("fullName")}
          jobTitle={data.jobTitle}
          onJobTitleChange={handleFieldChange("jobTitle")}
          address={data.address}
          onAddressChange={handleFieldChange("address")}
          email={data.email}
          onEmailChange={handleFieldChange("email")}
          phoneNumber={data.phoneNumber}
          onPhoneNumberChange={handleFieldChange("phoneNumber")}
          website={data.website}
          onWebsiteChange={handleFieldChange("website")}
          summary={data.summary}
          onSummaryChange={handleFieldChange("summary")}
        />
      ))}
    </div>
  );
};

export default Cards;
