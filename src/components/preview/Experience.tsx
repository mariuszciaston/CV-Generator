import { DataProps } from "../types";

const Experience: React.FC<Pick<DataProps, "experience">> = ({
  experience,
}) => {
  const hasExperience = experience.some(
    (item) =>
      item.position ||
      item.company ||
      item.city ||
      item.startDate ||
      item.endDate ||
      item.description,
  );

  return (
    <>
      {hasExperience && (
        <div id="experience">
          <h2 className="font-semibold text-blue-500">EXPERIENCE</h2>
          {experience.map((item) => (
            <div key={item.id}>
              {item.position && (
                <h3 className="font-semibold">{item.position}</h3>
              )}

              <div className="flex justify-between">
                <div>
                  {item.company}
                  {item.company && item.city && " | "}
                  {item.city}
                </div>

                <div>
                  {item.startDate}
                  {item.endDate ? " - " : ""}
                  {item.endDate}
                </div>
              </div>

              {item.description && (
                <ul className="list-disc pl-4">
                  <li>{item.description}</li>
                </ul>
              )}
              <br />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Experience;
