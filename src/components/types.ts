export interface DataProps {
  fullName: string;
  jobTitle: string;
  address: string;
  email: string;
  phoneNumber: string;
  website: string;
  summary: string;
  skills: string;

  experience: {
    id: string;
    position: string;
    company: string;
    city: string;
    description: string;
    startDate: string;
    endDate: string;
  }[];

  education: {
    id: string;
    school: string;
    city: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
}

export type HandleDataChangeProps = (
  field: keyof DataProps,
  value: string,
) => void;

export interface InputSectionProps {
  data: DataProps;
  onDataChange: HandleDataChangeProps;
  loadExampleData?: () => void;
  clearResumeData?: () => void;
  saveAsPdf?: () => void;
}

export type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export interface ButtonProps {
  text: string;
  className: string;
  onClick?: () => void;
}

export interface cardDetailsProps {
  title: string;
  Icon?: React.ElementType;
}

export interface CardProps extends DataProps, cardDetailsProps {
  isOpen: boolean;
  onToggle: (title: string) => void;

  onFullNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onJobTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWebsiteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSummaryChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSkillsChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

  onExperienceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEducationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addExperienceForm?: () => void;
  addEducationForm?: () => void;
  onRemove?: () => void;
}

export interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ChevronBtnProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface TextareaProps {
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
