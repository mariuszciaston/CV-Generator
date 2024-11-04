interface CardTypes {
  title: string;
  Icon: React.ElementType;
  isOpen: boolean;
}

interface ChevronBtnTypes {
  isOpen: boolean;
  onToggle: () => void;
}

interface InputFieldTypes {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

interface TextareaTypes {
  name: string;
  id: string;
  placeholder: string;
}

interface ButtonTypes {
  text: string;
  className: string;
}

export type {
  CardTypes,
  ChevronBtnTypes,
  InputFieldTypes,
  TextareaTypes,
  ButtonTypes,
};
