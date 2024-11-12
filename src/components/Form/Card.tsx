import InputFields from "./InputFields";
import ChevronBtn from "./ChevronBtn";
import { CardProps } from "../types";

const Card: React.FC<CardProps> = ({
  title,
  Icon,
  isOpen,
  onToggle,

  fullName,
  onFullNameChange,
  jobTitle,
  onJobTitleChange,
  address,
  onAddressChange,
  email,
  onEmailChange,
  phoneNumber,
  onPhoneNumberChange,
  website,
  onWebsiteChange,
  summary,
  onSummaryChange,
  skills,
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
        onFullNameChange={onFullNameChange}
        jobTitle={jobTitle}
        onJobTitleChange={onJobTitleChange}
        address={address}
        onAddressChange={onAddressChange}
        email={email}
        onEmailChange={onEmailChange}
        phoneNumber={phoneNumber}
        onPhoneNumberChange={onPhoneNumberChange}
        website={website}
        onWebsiteChange={onWebsiteChange}
        summary={summary}
        onSummaryChange={onSummaryChange}
        skills={skills}
        onSkillsChange={onSkillsChange}
      />
    </div>
  );
};

export default Card;
