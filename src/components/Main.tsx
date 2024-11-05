import InputSection from "./Form/InputSection";
import PreviewSection from "./Preview/PreviewSection";

const Main = () => {
  return (
    <main className="flex max-w-[1180px] flex-wrap items-center gap-8 p-8 lg:w-[calc(100vw-2rem)] lg:flex-row lg:items-start">
      <InputSection />
      <PreviewSection />
    </main>
  );
};

export default Main;
