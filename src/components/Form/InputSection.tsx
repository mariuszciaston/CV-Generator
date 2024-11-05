import Cards from "./Cards";
import Button from "./Button";
import { InputSectionProps } from "../types";

const InputSection: React.FC<InputSectionProps> = ({
  fullName,
  onFullNameChange,
}) => {
  return (
    <section
      id="input-section"
      className="flex w-full min-w-[256px] max-w-[768px] flex-col gap-4 lg:w-[320px]"
    >
      <div id="loadClearBtns" className="flex flex-wrap gap-2">
        <Button text="Load Example" className="bg-blue-500" />
        <Button text="Clear Resume" className="bg-red-500" />
      </div>
      <Cards fullName={fullName} onFullNameChange={onFullNameChange} />
      <Button text="Save as PDF" className="bg-green-500" />
    </section>
  );
};

export default InputSection;
