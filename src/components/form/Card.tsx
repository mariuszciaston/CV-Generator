import InputFields from "./InputFields";
import ChevronBtn from "../common/ChevronBtn";
import { CardProps } from "../types";

const Card: React.FC<CardProps> = ({
  title,
  Icon,
  isOpen,
  onToggle,

  fullName,
  jobTitle,
  address,
  phoneNumber,
  email,
  website,
  summary,
  skills,
  experience,
  education,
  onFullNameChange,
  onJobTitleChange,
  onAddressChange,
  onEmailChange,
  onPhoneNumberChange,
  onWebsiteChange,
  onSummaryChange,
  onSkillsChange,
  // onExperienceChange,
  // onEducationChange,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border bg-white p-4 shadow">
      <div className="flex items-center justify-between text-xl font-semibold">
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
        phoneNumber={phoneNumber}
        email={email}
        website={website}
        summary={summary}
        skills={skills}
        experience={experience}
        education={education}
        onFullNameChange={onFullNameChange}
        onJobTitleChange={onJobTitleChange}
        onAddressChange={onAddressChange}
        onEmailChange={onEmailChange}
        onPhoneNumberChange={onPhoneNumberChange}
        onWebsiteChange={onWebsiteChange}
        onSummaryChange={onSummaryChange}
        onSkillsChange={onSkillsChange}
        // onExperienceChange={onExperienceChange}
        // onEducationChange={onEducationChange}
      />
    </div>
  );
};

export default Card;
