import { DataProps } from "../types";

const Skills: React.FC<Pick<DataProps, "skills">> = ({ skills }) => {
  return (
    <>
      {skills && (
        <>
          <h2 className="font-medium text-blue-500">SKILLS</h2>
          <p>{skills}</p>
        </>
      )}
    </>
  );
};

export default Skills;
