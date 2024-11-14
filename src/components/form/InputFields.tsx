import InputField from "../common/InputField";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { CardProps } from "../types";
import cardDetails from "./cardDetails";

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
    | "onFullNameChange"
    | "onJobTitleChange"
    | "onAddressChange"
    | "onEmailChange"
    | "onPhoneNumberChange"
    | "onWebsiteChange"
    | "onSummaryChange"
    | "onSkillsChange"
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
  onFullNameChange,
  onJobTitleChange,
  onAddressChange,
  onEmailChange,
  onPhoneNumberChange,
  onWebsiteChange,
  onSummaryChange,
  onSkillsChange,
}) => {
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
          <InputField
            label="Position"
            type="text"
            id="position"
            placeholder="Enter your Role/Job Title"
          />
          <InputField
            label="Company"
            type="text"
            id="company"
            placeholder="Enter company's name"
          />
          <InputField
            label="City"
            type="text"
            id="city"
            placeholder="Enter a city"
          />
          <InputField
            label="Description"
            type="text"
            id="description"
            placeholder="Job responsibility"
          />
          <InputField
            label="Start Date"
            type="date"
            id="startDate"
            placeholder="Enter start date"
          />
          <InputField
            label="End Date"
            type="date"
            id="endDate"
            placeholder="Enter end date"
          />

          <Button text="Remove" className="bg-red-500" />
          <Button text="Add" className="bg-blue-500" />
        </>
      )}
      {title === cardDetails[3].title && (
        <>
          <InputField
            label="School/University"
            type="text"
            id="school"
            placeholder="Enter School/University"
          />
          <InputField
            label="City"
            type="text"
            id="city"
            placeholder="Enter a city"
          />
          <InputField
            label="Degree"
            type="text"
            id="degree"
            placeholder="Enter Degree"
          />

          <InputField
            label="Start Date"
            type="date"
            id="startDate"
            placeholder="Enter start date"
          />
          <InputField
            label="End Date"
            type="date"
            id="endDate"
            placeholder="Enter end date"
          />

          <Button text="Remove" className="bg-red-500" />
          <Button text="Add" className="bg-blue-500" />
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
