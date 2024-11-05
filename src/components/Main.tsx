import { useState } from "react";
import InputSection from "./Form/InputSection";
import PreviewSection from "./Preview/PreviewSection";

const Main = () => {
  const [fullName, setFullName] = useState("");

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  return (
    <main className="flex max-w-[1180px] flex-wrap items-center gap-8 p-8 lg:w-[calc(100vw-2rem)] lg:flex-row lg:items-start">
      <InputSection
        fullName={fullName}
        onFullNameChange={handleFullNameChange}
      />
      <PreviewSection fullName={fullName} />
    </main>
  );
};

export default Main;
