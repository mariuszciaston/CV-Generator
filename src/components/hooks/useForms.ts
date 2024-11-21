import { useState, useEffect } from "react";
import { CardProps, DataProps } from "../types";
import { emptyData } from "../form/data";

export const useForms = ({
  experience,
  education,
  onExperienceChange,
  onEducationChange,
}: {
  experience: DataProps["experience"];
  education: DataProps["education"];

  onExperienceChange: Pick<
    CardProps,
    "onExperienceChange"
  >["onExperienceChange"];

  onEducationChange: Pick<CardProps, "onEducationChange">["onEducationChange"];
}) => {
  const [experienceForms, setExperienceForms] = useState(
    experience.length > 0
      ? experience
      : [{ ...emptyData.experience[0], id: crypto.randomUUID() }],
  );

  const [educationForms, setEducationForms] = useState(
    education.length > 0
      ? education
      : [{ ...emptyData.education[0], id: crypto.randomUUID() }],
  );

  useEffect(() => {
    if (experience.length > 0) {
      setExperienceForms(experience);
    }
  }, [experience]);

  useEffect(() => {
    if (education.length > 0) {
      setEducationForms(education);
    }
  }, [education]);

  const handleExperienceChange = (id: string, field: string, value: string) => {
    const updatedForms = experienceForms.map((form) =>
      form.id === id ? { ...form, [field]: value } : form,
    );
    setExperienceForms(updatedForms);
    onExperienceChange({
      target: { value: JSON.stringify(updatedForms) },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const addExperienceForm = () => {
    setExperienceForms((prev) => [
      ...prev,
      { ...emptyData.experience[0], id: crypto.randomUUID() },
    ]);
  };

  const removeExperienceForm = (id: DataProps["experience"][0]["id"]) => {
    const updatedForms = experienceForms.filter((form) => form.id !== id);
    setExperienceForms(updatedForms);
    onExperienceChange({
      target: { value: JSON.stringify(updatedForms) },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleEducationChange = (id: string, field: string, value: string) => {
    const updatedForms = educationForms.map((form) =>
      form.id === id ? { ...form, [field]: value } : form,
    );
    setEducationForms(updatedForms);
    onEducationChange({
      target: { value: JSON.stringify(updatedForms) },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const addEducationForm = () => {
    setEducationForms((prev) => [
      ...prev,
      { ...emptyData.education[0], id: crypto.randomUUID() },
    ]);
  };

  const removeEducationForm = (id: DataProps["education"][0]["id"]) => {
    const updatedForms = educationForms.filter((form) => form.id !== id);
    setEducationForms(updatedForms);
    onEducationChange({
      target: { value: JSON.stringify(updatedForms) },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return {
    experienceForms,
    educationForms,
    handleExperienceChange,
    handleEducationChange,
    addExperienceForm,
    addEducationForm,
    removeExperienceForm,
    removeEducationForm,
  };
};
