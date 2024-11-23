import Card from "./Card";
import cardDetails from "./cardDetails";
import { InputSectionProps } from "../types";
import useCards from "../hooks/useCards";

const Cards: React.FC<InputSectionProps> = ({ data, onDataChange }) => {
  const { openCard, handleToggle, handleFieldChange } = useCards({
    data,
    onDataChange,
  });

  return (
    <div id="cards" className="flex flex-col flex-wrap gap-4">
      {cardDetails.map(({ title, Icon }) => (
        <Card
          key={title}
          title={title}
          Icon={Icon}
          isOpen={openCard === title}
          onToggle={handleToggle}
          {...data}
          onFullNameChange={handleFieldChange("fullName")}
          onJobTitleChange={handleFieldChange("jobTitle")}
          onAddressChange={handleFieldChange("address")}
          onPhoneNumberChange={handleFieldChange("phoneNumber")}
          onEmailChange={handleFieldChange("email")}
          onWebsiteChange={handleFieldChange("website")}
          onSummaryChange={handleFieldChange("summary")}
          onSkillsChange={handleFieldChange("skills")}
          onExperienceChange={handleFieldChange("experience")}
          onEducationChange={handleFieldChange("education")}
        />
      ))}
    </div>
  );
};

export default Cards;
