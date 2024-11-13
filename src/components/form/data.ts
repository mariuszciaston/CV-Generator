import { DataProps } from "../types";

const emptyData: DataProps = {
  fullName: "",
  jobTitle: "",
  address: "",
  phoneNumber: "",
  email: "",
  website: "",
  summary: "",
  skills: "",
};

const exampleData: DataProps = {
  fullName: "John Doe",
  jobTitle: "Software Developer",
  address: "Cracow, Poland",
  phoneNumber: "123 456 789",
  email: "john.doe@example.com",
  website: "www.example.com",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  skills: "React / Typescript / Tailwind",
};

export { emptyData, exampleData };
