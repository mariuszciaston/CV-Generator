import {
  User,
  FilePen,
  PencilRuler,
  Briefcase,
  GraduationCap,
} from "lucide-react";

import { cardDetailsProps } from "../types";

const cardDetails: cardDetailsProps[] = [
  { title: "Personal Information", Icon: User },
  { title: "Summary", Icon: FilePen },
  { title: "Experience", Icon: Briefcase },
  { title: "Education", Icon: GraduationCap },
  { title: "Skills", Icon: PencilRuler },
];

export default cardDetails;
