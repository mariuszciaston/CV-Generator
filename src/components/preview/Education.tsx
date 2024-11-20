import { DataProps } from "../types";

const Education: React.FC<Pick<DataProps, "education">> = ({ education }) => {
  const hasExperience = education.some(
    (item) =>
      item.degree || item.school || item.city || item.startDate || item.endDate,
  );

  return (
    <>
      {hasExperience && (
        <div id="education">
          <h2 className="font-semibold text-blue-500">EDUCATION</h2>
          {education.map((item) => (
            <div key={item.id}>
              {item.school && <h3 className="font-semibold">{item.degree}</h3>}

              <div className="flex justify-between">
                <div>
                  {item.school}
                  {item.school && item.city && " | "}
                  {item.city}
                </div>

                <div>
                  {item.startDate}
                  {item.endDate ? " - " : ""}
                  {item.endDate}
                </div>
              </div>

              <br />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Education;
