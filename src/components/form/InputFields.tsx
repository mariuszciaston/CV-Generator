import { useState } from "react";
import InputField from "../common/InputField";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { CardProps } from "../types";
import cardDetails from "./cardDetails";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";

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
    // | "onExperienceChange"
    // | "onEducationChange"
    | "addExperienceForm"
    | "addEducationForm"
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
  // experience,
  // education,
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
  const [experienceForms, setExperienceForms] = useState([
    { id: crypto.randomUUID() },
  ]);

  const addExperienceForm = () => {
    setExperienceForms((prev) => [...prev, { id: crypto.randomUUID() }]);
  };

  const removeExperienceForm = (id: string) => {
    setExperienceForms((prev) => prev.filter((form) => form.id !== id));
  };

  const [educationForms, setEducationForms] = useState([
    { id: crypto.randomUUID() },
  ]);

  const addEducationForm = () => {
    setEducationForms((prev) => [...prev, { id: crypto.randomUUID() }]);
  };

  const removeEducationForm = (id: string) => {
    setEducationForms((prev) => prev.filter((form) => form.id !== id));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {title === cardDetails[0].title && (
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
      )}

      {title === cardDetails[1].title && (
        <Textarea
          name={cardDetails[1].title.toLowerCase()}
          id={cardDetails[1].title.toLowerCase()}
          placeholder="I am a..."
          value={summary}
          onChange={onSummaryChange}
        />
      )}

      {title === cardDetails[2].title && (
        <>
          {experienceForms.map((form) => (
            <ExperienceForm
              key={form.id}
              // experience={experience}
              onRemove={() => removeExperienceForm(form.id)}
            />
          ))}

          <Button
            onClick={addExperienceForm}
            text="Add"
            className="bg-blue-500"
          />
        </>
      )}

      {title === cardDetails[3].title && (
        <>
          {educationForms.map((form) => (
            <EducationForm
              key={form.id}
              // education={education}
              onRemove={() => removeEducationForm(form.id)}
            />
          ))}

          <Button
            onClick={addEducationForm}
            text="Add"
            className="bg-blue-500"
          />
        </>
      )}
      {title === cardDetails[4].title && (
        <Textarea
          name={cardDetails[4].title.toLowerCase()}
          id={cardDetails[4].title.toLowerCase()}
          placeholder="Enter your skills"
          value={skills}
          onChange={onSkillsChange}
        />
      )}
    </>
  );
};

export default InputFields;
