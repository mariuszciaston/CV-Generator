import { useState } from "react";
import { InputSectionProps, InputChangeEvent } from "../types";
import cardDetails from "../form/cardDetails";

const useCards = ({ data, onDataChange }: InputSectionProps) => {
  const [openCard, setOpenCard] = useState<string | null>(cardDetails[2].title);

  const handleToggle = (title: string) => {
    setOpenCard((prev) => (prev === title ? null : title));
  };

  const handleFieldChange =
    (field: keyof typeof data) => (e: InputChangeEvent) => {
      if (field === "experience" || field === "education") {
        try {
          const parsedValue = JSON.parse(e.target.value);
          onDataChange(field, parsedValue);
        } catch {
          onDataChange(field, e.target.value);
        }
      } else {
        onDataChange(field, e.target.value);
      }
    };

  return { data, openCard, handleToggle, handleFieldChange };
};

export default useCards;
