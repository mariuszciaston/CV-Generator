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

  // experience: "abc",

  experience: [
    {
      // id: "1",
      position: "",
      // company: "",
      // city: "",
      // description: "",
      // startDate: "",
      // endDate: "",
    },
  ],

  education: [
    {
      // id: "1",
      school: "",
      // city: "",
      // degree: "",
      // startDate: "",
      // endDate: "",
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

  // experience: "123",

  experience: [
    {
      // id: "1",
      position: "Example Position 1",
      // company: "Example Company 1",
      // city: "Cracow, Poland",
      // description:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      // startDate: "2020-01-01",
      // endDate: "2021-01-01",
    },
    //   {
    //     // id: "2",
    //     position: "Example Position 2",
    //     company: "Example Company 2",
    //     city: "Cracow, Poland",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //     startDate: "2020-01-01",
    //     endDate: "2021-01-01",
    //   },
  ],

  education: [
    {
      // id: "1",
      school: "Example School",
      // city: "Cracow, Poland",
      // degree: "Bachelor of Science",
      // startDate: "2020-01-01",
      // endDate: "2021-01-01",
    },
    // {
    //   // id: "2",
    //   school: "Example School",
    //   city: "Cracow, Poland",
    //   degree: "Bachelor of Science",
    //   startDate: "2020-01-01",
    //   endDate: "2021-01-01",
    // },
  ],
};

export { emptyData, exampleData };
