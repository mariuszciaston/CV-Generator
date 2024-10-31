import Button from "./Button";
import InputField from "./InputField";
import Textarea from "./Textarea";
import { CardTypes } from "./types";

const InputFields: React.FC<Pick<CardTypes, "isOpen" | "title">> = ({
  isOpen,
  title,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {title === "Personal Information" && (
        <>
          <InputField
            label="Full Name"
            type="text"
            id="fullName"
            placeholder="Enter your full name"
          />
          <InputField
            label="Job Title"
            type="text"
            id="jobTitle"
            placeholder="Enter your job title"
          />
          <InputField
            label="Address"
            type="text"
            id="address"
            placeholder="Enter your address"
          />
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email"
          />
          <InputField
            label="Phone Number"
            type="tel"
            id="phoneNumber"
            placeholder="Enter your phone number"
          />
          <InputField
            label="Website"
            type="url"
            id="website"
            placeholder="Enter your website URL"
          />
        </>
      )}

      {title === "Summary" && (
        <Textarea name="summary" id="summary" placeholder="I am a..." />
      )}

      {title === "Experience" && (
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
      {title === "Education" && (
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
      {title === "Skills" && (
        <Textarea name="skills" id="skills" placeholder="Enter your skills" />
      )}
    </>
  );
};

export default InputFields;
