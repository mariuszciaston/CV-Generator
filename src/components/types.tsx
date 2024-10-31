interface CardTypes {
  title: string;
  Icon: React.ElementType;
  isOpen: boolean;
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

export type { CardTypes, InputFieldTypes, TextareaTypes, ButtonTypes };
