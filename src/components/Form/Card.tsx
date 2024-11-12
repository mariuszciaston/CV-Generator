import InputFields from "./InputFields";
import ChevronBtn from "./ChevronBtn";
import { CardProps } from "../types";

const Card: React.FC<CardProps > = ({
  title,
  Icon,
  isOpen,
  onToggle,

  fullName,
  jobTitle,
  address,
  email,
  phoneNumber,
  website,
  summary,
  skills,
  onFullNameChange,
  onJobTitleChange,
  onAddressChange,
  onEmailChange,
  onPhoneNumberChange,
  onWebsiteChange,
  onSummaryChange,
  onSkillsChange,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border bg-white p-4 shadow">
      <div className="flex items-center justify-between text-xl font-medium">
        <div className="flex items-center gap-2">
          {Icon && <Icon />}
          <div>{title}</div>
        </div>
        <ChevronBtn isOpen={isOpen} onToggle={() => onToggle(title)} />
      </div>
      <InputFields
        isOpen={isOpen}
        title={title}
        fullName={fullName}
        jobTitle={jobTitle}
        address={address}
        email={email}
        phoneNumber={phoneNumber}
        website={website}
        summary={summary}
        skills={skills}
        onFullNameChange={onFullNameChange}
        onJobTitleChange={onJobTitleChange}
        onAddressChange={onAddressChange}
        onEmailChange={onEmailChange}
        onPhoneNumberChange={onPhoneNumberChange}
        onWebsiteChange={onWebsiteChange}
        onSummaryChange={onSummaryChange}
        onSkillsChange={onSkillsChange}
      />
    </div>
  );
};

export default Card;
