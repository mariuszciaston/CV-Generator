import InputField from "../common/InputField";
import Button from "../common/Button";
import { CardProps, DataProps, OnChangeProps } from "../types";

const EducationForm: React.FC<{
  form: DataProps["education"][0];
  onRemove: CardProps["onRemove"];
  onChange: OnChangeProps;
}> = ({ form, onRemove, onChange }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-orange-100 p-4">
      <InputField
        label="Degree"
        type="text"
        id="degree"
        placeholder="Enter Degree"
        value={form.degree}
        onChange={(e) => onChange(form.id, "degree", e.target.value)}
      />
      <InputField
        label="University"
        type="text"
        id="university"
        placeholder="Enter University"
        value={form.university}
        onChange={(e) => onChange(form.id, "university", e.target.value)}
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

      <Button text="Remove" className="bg-orange-500" onClick={onRemove} />
    </div>
  );
};

export default EducationForm;
