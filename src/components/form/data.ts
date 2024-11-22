import { DataProps } from "../types";
import { v4 as uuidv4 } from "uuid";

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
      university: "",
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
    "Passionate software developer with 5 years of experience in designing and developing web applications. Proficient in Typescript, React, and Node.js.",
  skills:
    "JavaScript / Typescript / React / Tailwind / Node.js / HTML / CSS / PostgreSQL",

  experience: [
    {
      id: uuidv4(),
      position: "Senior Software Developer",
      company: "Example Company 1",
      city: "Warsaw, Poland",
      startDate: "2022",
      endDate: "present",
      description:
        "Lead a team of developers to create scalable web applications, improve code quality, and implement new features based on user feedback.",
    },
    {
      id: uuidv4(),
      position: "Software Developer",
      company: "Example Company 2",
      city: "Wrocław, Poland",
      startDate: "2020",
      endDate: "2022",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to enhance product functionality.",
    },
    {
      id: uuidv4(),
      position: "Junior Software Developer",
      company: "Example Company 3",
      city: "Poznań, Poland",
      startDate: "2018",
      endDate: "2020",
      description:
        "Implemented front-end and back-end solutions for various clients. Ensured high performance and responsiveness of applications.",
    },
  ],

  education: [
    {
      id: uuidv4(),
      degree: "Master's in Computer Engineering",
      university: "Example University",
      city: "Cracow, Poland",
      startDate: "2016",
      endDate: "2018",
    },
    {
      id: uuidv4(),
      degree: "Bachelor's in Computer Science",
      university: "Example University",
      city: "Cracow, Poland",
      startDate: "2013",
      endDate: "2016",
    },
  ],
};

export { emptyData, exampleData };
