import InputField from "../common/InputField";
import Button from "../common/Button";
import { CardProps } from "../types";

const EducationForm: React.FC<Pick<CardProps, "education">> = ({
  education,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-orange-100 p-4">
      <InputField
        label="School/University"
        type="text"
        id="school"
        placeholder="Enter School/University"
        value={education[0].school}
        // onChange={onEducationChange}
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

      <Button text="Remove" className="bg-orange-500" />
    </div>
  );
};

export default EducationForm;
