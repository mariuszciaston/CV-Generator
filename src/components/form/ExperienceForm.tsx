import InputField from "../common/InputField";
import Button from "../common/Button";
import { DataProps } from "../types";

const ExperienceForm: React.FC<{
  form: DataProps["experience"][0];
  onRemove: () => void;
}> = ({ form, onRemove }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-orange-100 p-4">
      <InputField
        label="Position"
        type="text"
        id="position"
        placeholder="Enter your Role/Job Title"
        value={form.position}
        // onChange={onPositionChange}
      />
      <InputField
        label="Company"
        type="text"
        id="company"
        placeholder="Enter company's name"
        value={form.company}
      />
      <InputField
        label="City"
        type="text"
        id="city"
        placeholder="Enter a city"
        value={form.city}
      />
      <InputField
        label="Description"
        type="text"
        id="description"
        placeholder="Job responsibility"
        value={form.description}
      />
      <InputField
        label="Start Date"
        type="text"
        id="startDate"
        placeholder="Enter start date"
        value={form.startDate}
      />
      <InputField
        label="End Date"
        type="text"
        id="endDate"
        placeholder="Enter end date"
        value={form.endDate}
      />

      <Button text="Remove" className="bg-orange-500" onClick={onRemove} />
    </div>
  );
};

export default ExperienceForm;
