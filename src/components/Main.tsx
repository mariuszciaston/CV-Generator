import InputSection from "./form/InputSection";
import PreviewSection from "./preview/PreviewSection";
import useResumeData from "./hooks/useResumeData";
import usePrint from "./hooks/useReactToPrint";

const Main = () => {
  const { data, handleDataChange, loadExampleData, clearResumeData } =
    useResumeData();
  const { contentRef, reactToPrintFn } = usePrint();

  return (
    <main className="flex w-[calc(100vw-2rem)] max-w-[640px] flex-wrap items-center gap-8 my-8 lg:max-w-[1180px] lg:flex-row lg:items-start lg:m-8">
      <InputSection
        data={data}
        onDataChange={handleDataChange}
        loadExampleData={loadExampleData}
        clearResumeData={clearResumeData}
        saveAsPdf={reactToPrintFn}
      />
      <PreviewSection ref={contentRef} {...data} />
    </main>
  );
};

export default Main;
