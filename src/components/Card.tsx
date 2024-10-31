import InputField from "./InputField";

import { ChevronDown, ChevronUp } from "lucide-react";

interface CardProps {
  title: string;
  Icon: React.ElementType;
  isOpen: boolean;
}

const Card: React.FC<CardProps> = ({ title, Icon, isOpen }) => {
  const ChevronBtn: React.FC<Pick<CardProps, "isOpen">> = ({ isOpen }) => {
    const Icon = isOpen ? ChevronUp : ChevronDown;
    return (
      <button type="button" className="rounded-md p-2 hover:bg-gray-100">
        <Icon className="size-4" />
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-4 rounded-md border bg-white p-4 shadow">
      <div className="flex items-center justify-between text-xl font-medium">
        <div className="flex items-center gap-2">
          {Icon && <Icon />}
          <div>{title}</div>
        </div>

        <ChevronBtn isOpen={isOpen} />
      </div>

      {isOpen && title === "Personal Information" && (
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
            type="text"
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
    </div>
  );
};

export default Card;
