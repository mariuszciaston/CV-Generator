import InputField from "../common/InputField";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { CardProps, DataProps, HandleDataChangeProps } from "../types";

const ExperienceForm: React.FC<{
  form: DataProps["experience"][0];
  onRemove: CardProps["onRemove"];
  onChange: HandleDataChangeProps;
}> = ({ form, onRemove, onChange }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-orange-100 p-4">
      <InputField
        label="Position"
        type="text"
        id="position"
        placeholder="Enter your Role/Job Title"
        value={form.position}
        onChange={(e) => onChange(form.id, "position", e.target.value)}
      />
      <InputField
        label="Company"
        type="text"
        id="company"
        placeholder="Enter company's name"
        value={form.company}
        onChange={(e) => onChange(form.id, "company", e.target.value)}
      />
      <InputField
        label="City"
        type="text"
        id="city"
        placeholder="Enter a city"
        value={form.city}
        onChange={(e) => onChange(form.id, "city", e.target.value)}
      />
      <InputField
        label="Start Date"
        type="text"
        id="startDate"
        placeholder="Enter start date"
        value={form.startDate}
        onChange={(e) => onChange(form.id, "startDate", e.target.value)}
      />
      <InputField
        label="End Date"
        type="text"
        id="endDate"
        placeholder="Enter end date"
        value={form.endDate}
        onChange={(e) => onChange(form.id, "endDate", e.target.value)}
      />

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold" htmlFor="description">
          Description
        </label>

        <Textarea
          name="Description"
          id="description"
          placeholder="Job responsibility"
          value={form.description}
          onChange={(e) => onChange(form.id, "description", e.target.value)}
        />
      </div>

      <Button text="Remove" className="bg-orange-500" onClick={onRemove} />
    </div>
  );
};

export default ExperienceForm;
