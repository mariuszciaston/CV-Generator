export interface Data {
  fullName: string;
  jobTitle: string;
  address: string;
  email: string;
  phoneNumber: string;
  website: string;
  summary: string;
  skills: string;

  // position: string;
  // company: string;
  // city: string;
  // description: string;
  // startDate: string;
  // endDate: string;
  // school: string;
  // degree: string;
}

export type HandleDataChangeProps = (field: keyof Data, value: string) => void;

export interface InputSectionProps {
  data: Data;
  onDataChange: HandleDataChangeProps;
}

export type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export interface ButtonProps {
  text: string;
  className: string;
}

export interface cardDetailsProps {
  title: string;
  Icon?: React.ElementType;
}

export interface CardProps extends Data, cardDetailsProps {
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
