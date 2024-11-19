import { DataProps } from "../types";

const Skills: React.FC<Pick<DataProps, "skills">> = ({ skills }) => {
  return (
    <div id="skills">
      {skills && (
        <>
          <h2 className="font-semibold text-blue-500">SKILLS</h2>
          <p>{skills}</p>
        </>
      )}
    </div>
  );
};

export default Skills;
