import { useState, useEffect } from "react";
import InputField from "../common/InputField";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { CardProps, DataProps } from "../types";
import cardDetails from "./cardDetails";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import { emptyData } from "./data";

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
  const [experienceForms, setExperienceForms] = useState(
    experience.length > 0
      ? experience
      : [{ ...emptyData.experience[0], id: crypto.randomUUID() }],
  );

  useEffect(() => {
    if (experience.length > 0) {
      setExperienceForms(experience);
    }
  }, [experience]);

  const handleExperienceChange = (id: string, field: string, value: string) => {
    const updatedForms = experienceForms.map((form) =>
      form.id === id ? { ...form, [field]: value } : form,
    );
    setExperienceForms(updatedForms);
    onExperienceChange({
      target: { value: JSON.stringify(updatedForms) },
    } as any);
  };

  const addExperienceForm = () => {
    setExperienceForms((prev) => [
      ...prev,
      { ...emptyData.experience[0], id: crypto.randomUUID() },
    ]);
  };
  const removeExperienceForm = (id: DataProps["experience"][0]["id"]) => {
    setExperienceForms((prev) => prev.filter((form) => form.id !== id));
  };

  const [educationForms, setEducationForms] = useState(
    education.length > 0
      ? education
      : [{ ...emptyData.education[0], id: crypto.randomUUID() }],
  );

  useEffect(() => {
    if (education.length > 0) {
      setEducationForms(education);
    }
  }, [education]);

  const handleEducationChange = (id: string, field: string, value: string) => {
    const updatedForms = educationForms.map((form) =>
      form.id === id ? { ...form, [field]: value } : form,
    );
    setEducationForms(updatedForms);
    onEducationChange({
      target: { value: JSON.stringify(updatedForms) },
    } as any);
  };

  const addEducationForm = () => {
    setEducationForms((prev) => [
      ...prev,
      { ...emptyData.education[0], id: crypto.randomUUID() },
    ]);
  };
  const removeEducationForm = (id: DataProps["education"][0]["id"]) => {
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
              form={form}
              onRemove={() => removeExperienceForm(form.id)}
              onChange={handleExperienceChange}
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
              form={form}
              onRemove={() => removeEducationForm(form.id)}
              onChange={handleEducationChange}
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
