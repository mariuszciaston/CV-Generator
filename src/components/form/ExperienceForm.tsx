import InputField from "../common/InputField";
import Button from "../common/Button";
// import { CardProps } from "../types";

const ExperienceForm: React.FC<{
  // experience: any[];
  onRemove: () => void;
}> = ({ onRemove }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-orange-100 p-4">
      <InputField
        label="Position"
        type="text"
        id="position"
        placeholder="Enter your Role/Job Title"
        // value={experience[0].position}
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

export default ExperienceForm;
