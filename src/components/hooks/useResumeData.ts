import { useState } from "react";
import { emptyData, exampleData } from "../Form/data";
import { DataProps, HandleDataChangeProps } from "../types";

const useResumeData = () => {
  const [data, setData] = useState<DataProps>({ ...emptyData });

  const handleDataChange: HandleDataChangeProps = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const loadExampleData = () => {
    setData(exampleData);
  };

  const clearResumeData = () => {
    setData(emptyData);
  };

  return { data, handleDataChange, loadExampleData, clearResumeData };
};

export default useResumeData;
