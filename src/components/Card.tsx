import InputFields from "./InputFields";
import { CardTypes } from "./types";
import ChevronBtn from "./ChevronBtn";

const Card: React.FC<CardTypes> = ({ title, Icon, isOpen }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border bg-white p-4 shadow">
      <div className="flex items-center justify-between text-xl font-medium">
        <div className="flex items-center gap-2">
          {Icon && <Icon />}
          <div>{title}</div>
        </div>

        <ChevronBtn isOpen={isOpen} />
      </div>

      <InputFields isOpen={isOpen} title={title} />
    </div>
  );
};

export default Card;