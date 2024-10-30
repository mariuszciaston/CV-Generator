import Cards from "./Cards";

const InputSection = () => {
  return (
    <section
      id="input-section"
      className="flex w-full min-w-[256px] max-w-[768px] flex-col gap-4 lg:w-[320px]"
    >
      <div id="loadClearBtns" className="flex flex-wrap gap-2">
        <button
          type="button"
          className="flex-1 text-nowrap rounded-md bg-blue-400 p-2 text-sm font-medium text-white"
        >
          Load Example
        </button>

        <button
          type="button"
          className="flex-1 text-nowrap rounded-md bg-red-500 p-2 text-sm font-medium text-white"
        >
          Clear Resume
        </button>
      </div>

      <Cards />

      <button
        type="button"
        className="w-full text-nowrap rounded-md bg-green-500 p-2 text-sm font-medium text-white"
      >
        Save as PDF
      </button>
    </section>
  );
};

export default InputSection;
