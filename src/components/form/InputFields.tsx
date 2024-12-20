import InputField from "../common/InputField";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { CardProps } from "../types";
import cardDetails from "./cardDetails";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import { useForms } from "../hooks/useForms";

const InputFields: React.FC<
  Pick<
    CardProps,
    | "isOpen"
    | "title"
    | "fullName"
    | "jobTitle"
    | "address"
    | "phoneNumber"
    | "email"
    | "website"
    | "summary"
    | "skills"
    | "experience"
    | "education"
    | "onFullNameChange"
    | "onJobTitleChange"
    | "onAddressChange"
    | "onEmailChange"
    | "onPhoneNumberChange"
    | "onWebsiteChange"
    | "onSummaryChange"
    | "onSkillsChange"
    | "onExperienceChange"
    | "onEducationChange"
  >
> = ({
  isOpen,
  title,
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
  onExperienceChange,
  onEducationChange,
}) => {
  const {
    experienceForms,
    educationForms,
    handleExperienceChange,
    handleEducationChange,
    addExperienceForm,
    addEducationForm,
    removeExperienceForm,
    removeEducationForm,
  } = useForms({
    experience,
    education,
    onExperienceChange,
    onEducationChange,
  });

  if (!isOpen) {
    return null;
  }

  const renderPersonalDetailsFields = () => (
    <>
      <InputField
        label="Full Name"
        type="text"
        id="fullName"
        placeholder="Enter your full name"
        value={fullName}
        onChange={onFullNameChange}
      />
      <InputField
        label="Job Title"
        type="text"
        id="jobTitle"
        placeholder="Enter your job title"
        value={jobTitle}
        onChange={onJobTitleChange}
      />
      <InputField
        label="Address"
        type="text"
        id="address"
        placeholder="Enter your address"
        value={address}
        onChange={onAddressChange}
      />
      <InputField
        label="Phone Number"
        type="tel"
        id="phoneNumber"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={onPhoneNumberChange}
      />
      <InputField
        label="Email"
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={onEmailChange}
      />
      <InputField
        label="Website"
        type="url"
        id="website"
        placeholder="Enter your website URL"
        value={website}
        onChange={onWebsiteChange}
      />
    </>
  );

  const renderSummaryField = () => (
    <Textarea
      name={cardDetails[1].title.toLowerCase()}
      id={cardDetails[1].title.toLowerCase()}
      placeholder="I am a..."
      value={summary}
      onChange={onSummaryChange}
    />
  );

  const renderExperienceFields = () => (
    <>
      {experienceForms.map((form) => (
        <ExperienceForm
          key={form.id}
          form={form}
          onRemove={() => removeExperienceForm(form.id)}
          onChange={handleExperienceChange}
        />
      ))}
      <Button onClick={addExperienceForm} text="Add" className="bg-blue-500" />
    </>
  );

  const renderEducationFields = () => (
    <>
      {educationForms.map((form) => (
        <EducationForm
          key={form.id}
          form={form}
          onRemove={() => removeEducationForm(form.id)}
          onChange={handleEducationChange}
        />
      ))}
      <Button onClick={addEducationForm} text="Add" className="bg-blue-500" />
    </>
  );

  const renderSkillsField = () => (
    <Textarea
      name={cardDetails[4].title.toLowerCase()}
      id={cardDetails[4].title.toLowerCase()}
      placeholder="Enter your skills"
      value={skills}
      onChange={onSkillsChange}
    />
  );

  return (
    <>
      {title === cardDetails[0].title && renderPersonalDetailsFields()}
      {title === cardDetails[1].title && renderSummaryField()}
      {title === cardDetails[2].title && renderExperienceFields()}
      {title === cardDetails[3].title && renderEducationFields()}
      {title === cardDetails[4].title && renderSkillsField()}
    </>
  );
};

export default InputFields;
