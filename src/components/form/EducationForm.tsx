import InputField from "../common/InputField";
import Button from "../common/Button";
// import { CardProps } from "../types";

const EducationForm: React.FC<{
  // education: any[];
  onRemove: () => void;
}> = ({ onRemove }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-orange-100 p-4">
      <InputField
        label="School/University"
        type="text"
        id="school"
        placeholder="Enter School/University"
        // value={education[0].school}
      />
      <InputField
        label="City"
        type="text"
        id="city"
        placeholder="Enter a city"
        // value={education[0].city}
      />
      <InputField
        label="Degree"
        type="text"
        id="degree"
        placeholder="Enter Degree"
      />

      <InputField
        label="Start Date"
        type="text"
        id="startDate"
        placeholder="Enter start date"
      />
      <InputField
        label="End Date"
        type="text"
        id="endDate"
        placeholder="Enter end date"
      />

      <Button text="Remove" className="bg-orange-500" onClick={onRemove} />
    </div>
  );
};

export default EducationForm;
