import { useState } from "react";
import { CardProps, DataProps } from "../types";
import { emptyData } from "../form/data";
import { v4 as uuidv4 } from "uuid";

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
      : [{ ...emptyData.experience[0], id: uuidv4() }],
  );

  const [educationForms, setEducationForms] = useState(
    education.length > 0
      ? education
      : [{ ...emptyData.education[0], id: uuidv4() }],
  );

  if (JSON.stringify(experience) !== JSON.stringify(experienceForms)) {
    setExperienceForms(experience);
  }

  if (JSON.stringify(education) !== JSON.stringify(educationForms)) {
    setEducationForms(education);
  }

  const updateExperienceForms = (forms: DataProps["experience"]) => {
    setExperienceForms(forms);
    onExperienceChange({
      target: { value: JSON.stringify(forms) },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const updateEducationForms = (forms: DataProps["education"]) => {
    setEducationForms(forms);
    onEducationChange({
      target: { value: JSON.stringify(forms) },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleExperienceChange = (id: string, field: string, value: string) => {
    const updatedForms = experienceForms.map((form) =>
      form.id === id ? { ...form, [field]: value } : form,
    );
    updateExperienceForms(updatedForms);
  };

  const handleEducationChange = (id: string, field: string, value: string) => {
    const updatedForms = educationForms.map((form) =>
      form.id === id ? { ...form, [field]: value } : form,
    );
    updateEducationForms(updatedForms);
  };

  const addExperienceForm = () => {
    const updatedForms = [
      ...experienceForms,
      { ...emptyData.experience[0], id: uuidv4() },
    ];
    updateExperienceForms(updatedForms);
  };

  const addEducationForm = () => {
    const updatedForms = [
      ...educationForms,
      { ...emptyData.education[0], id: uuidv4() },
    ];
    updateEducationForms(updatedForms);
  };

  const removeExperienceForm = (id: DataProps["experience"][0]["id"]) => {
    const updatedForms = experienceForms.filter((form) => form.id !== id);
    updateExperienceForms(updatedForms);
  };

  const removeEducationForm = (id: DataProps["education"][0]["id"]) => {
    const updatedForms = educationForms.filter((form) => form.id !== id);
    updateEducationForms(updatedForms);
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
