import {
  User,
  FilePen,
  PencilRuler,
  Briefcase,
  GraduationCap,
} from "lucide-react";

import Card from "./Card";

const Cards = () => {
  return (
    <div id="Cards" className="flex flex-col flex-wrap gap-4">
      <Card title="Personal Information" Icon={User} isOpen={true} />
      <Card title="Summary" Icon={FilePen} isOpen={true} />
      <Card title="Experience" Icon={Briefcase} isOpen={true} />
      <Card title="Education" Icon={GraduationCap} isOpen={true} />
      <Card title="Skills" Icon={PencilRuler} isOpen={true} />
    </div>
  );
};

export default Cards;
