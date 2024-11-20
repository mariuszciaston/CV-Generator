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

  experience: [
    {
      id: "",
      position: "",
      company: "",
      city: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],

  education: [
    {
      id: "",
      degree: "",
      school: "",
      city: "",
      startDate: "",
      endDate: "",
    },
  ],
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

  experience: [
    {
      id: crypto.randomUUID(),
      position: "Example Position 1",
      company: "Example Company 1",
      city: "Cracow, Poland",
      startDate: "2020-01-01",
      endDate: "2021-01-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: crypto.randomUUID(),
      position: "Example Position 2",
      company: "Example Company 2",
      city: "Cracow, Poland",
      startDate: "2020-01-01",
      endDate: "2021-01-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],

  education: [
    {
      id: crypto.randomUUID(),
      degree: "Bachelor of Science",
      school: "Example School",
      city: "Cracow, Poland",
      startDate: "2020-01-01",
      endDate: "2021-01-01",
    },
    {
      id: crypto.randomUUID(),
      degree: "Bachelor of Science",
      school: "Example School",
      city: "Cracow, Poland",
      startDate: "2020-01-01",
      endDate: "2021-01-01",
    },
  ],
};

export { emptyData, exampleData };
