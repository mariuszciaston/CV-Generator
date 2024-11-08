import { useState } from "react";
import InputSection from "./Form/InputSection";
import PreviewSection from "./Preview/PreviewSection";
import { Data } from "./types";

const Main = () => {
  const [data, setData] = useState<Data>({
    fullName: "",
    jobTitle: "",
    address: "",
    email: "",
    phoneNumber: "",
    website: "",
    summary: "",
  });

  const handleDataChange = (field: keyof Data, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <main className="flex w-[calc(100vw-2rem)] max-w-[768px] flex-wrap items-center gap-8 p-8 lg:max-w-[1180px] lg:flex-row lg:items-start">
      <InputSection data={data} onDataChange={handleDataChange} />
      <PreviewSection {...data} />
    </main>
  );
};

export default Main;
