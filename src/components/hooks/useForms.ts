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

  const handleExperienceChange = (id: string, field: string, value: string) => {
    const updatedForms = experienceForms.map((form) =>
      form.id === id ? { ...form, [field]: value } : form,
    );
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

  const addExperienceForm = () => {
    const updatedForms = [
      ...experienceForms,
      { ...emptyData.experience[0], id: uuidv4() },
    ];
    setExperienceForms(updatedForms);
    onExperienceChange({
      target: { value: JSON.stringify(updatedForms) },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const addEducationForm = () => {
    const updatedForms = [
      ...educationForms,
      { ...emptyData.education[0], id: uuidv4() },
    ];
    setEducationForms(updatedForms);
    onEducationChange({
      target: { value: JSON.stringify(updatedForms) },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const removeExperienceForm = (id: DataProps["experience"][0]["id"]) => {
    const updatedForms = experienceForms.filter((form) => form.id !== id);
    setExperienceForms(updatedForms);
    onExperienceChange({
      target: { value: JSON.stringify(updatedForms) },
    } as React.ChangeEvent<HTMLInputElement>);
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
