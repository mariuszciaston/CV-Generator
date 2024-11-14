import Cards from "./Cards";
import Button from "../utils/Button";
import { InputSectionProps } from "../types";

const InputSection: React.FC<InputSectionProps> = ({
  data,
  onDataChange,
  loadExampleData,
  clearResumeData,
  saveAsPdf,
}) => {
  return (
    <section
      id="input-section"
      className="flex w-full min-w-[256px] flex-col gap-4 lg:w-[320px]"
    >
      <div id="loadClearBtns" className="flex flex-wrap gap-2">
        <Button
          onClick={loadExampleData}
          text="Load Example"
          className="bg-blue-500"
        />
        <Button
          onClick={clearResumeData}
          text="Clear Resume"
          className="bg-red-500"
        />
      </div>
      <Cards data={data} onDataChange={onDataChange} />
      <Button onClick={saveAsPdf} text="Save as PDF" className="bg-green-500" />
    </section>
  );
};

export default InputSection;
