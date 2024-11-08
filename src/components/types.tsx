export interface Data {
  fullName: string;
  jobTitle: string;
  address: string;
  email: string;
  phoneNumber: string;
  website: string;
  summary: string;
}

export interface InputSectionProps {
  data: Data;
  onDataChange: (field: keyof Data, value: string) => void;
}

export interface ButtonProps {
  text: string;
  className: string;
}

export interface cardDetailsProps {
  title: string;
  Icon: React.ElementType;
}

export interface CardProps {
  title: string;
  Icon: React.ElementType;
  isOpen: boolean;
  onToggle: (title: string) => void;

  fullName: string;
  onFullNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  jobTitle: string;
  onJobTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  address: string;
  onAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phoneNumber: string;
  onPhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  website: string;
  onWebsiteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  summary: string;
  onSummaryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

  onChange: any;
}
