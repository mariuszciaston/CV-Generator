import InputField from "../common/InputField";
import Button from "../common/Button";
import { DataProps } from "../types";

const EducationForm: React.FC<{
  form: DataProps["education"][0];
  onRemove: () => void;
}> = ({ form, onRemove }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-orange-100 p-4">
      <InputField
        label="School/University"
        type="text"
        id="school"
        placeholder="Enter School/University"
        value={form.school}
      />
      <InputField
        label="City"
        type="text"
        id="city"
        placeholder="Enter a city"
        value={form.city}
      />
      <InputField
        label="Degree"
        type="text"
        id="degree"
        placeholder="Enter Degree"
        value={form.degree}
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

export default EducationForm;
