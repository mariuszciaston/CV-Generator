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
      <Card title="Summary" Icon={FilePen} isOpen={false} />
      <Card title="Experience" Icon={Briefcase} isOpen={false} />
      <Card title="Education" Icon={GraduationCap} isOpen={false} />
      <Card title="Skills" Icon={PencilRuler} isOpen={false} />
    </div>
  );
};

export default Cards;
