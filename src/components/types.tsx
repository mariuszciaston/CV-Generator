export interface InputSectionProps {
  fullName: string;
  onFullNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
}
