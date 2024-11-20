import { DataProps } from "../types";

const Skills: React.FC<Pick<DataProps, "skills">> = ({ skills }) => {
  return (
    <>
      {skills && (
        <div id="skills">
          <h2 className="font-semibold text-blue-500">SKILLS</h2>
          <p>{skills}</p>
          <br />
        </div>
      )}
    </>
  );
};

export default Skills;
