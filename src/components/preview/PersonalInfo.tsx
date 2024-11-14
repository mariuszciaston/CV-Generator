import { DataProps } from "../types";

const PersonalInfo: React.FC<
  Pick<
    DataProps,
    "fullName" | "jobTitle" | "address" | "phoneNumber" | "email" | "website"
  >
> = ({ fullName, jobTitle, address, phoneNumber, email, website }) => {
  return (
    <>
      {(fullName || jobTitle) && (
        <>
          {fullName && (
            <p className="text-4xl font-medium text-blue-500">{fullName}</p>
          )}
          {jobTitle && <p className="text-3xl font-light">{jobTitle}</p>}
          <br />
        </>
      )}

      {(address || phoneNumber || email || website) && (
        <>
          <p>
            {address && (
              <>
                {address} {phoneNumber || email || website ? " | " : ""}
              </>
            )}
            {phoneNumber && (
              <>
                {phoneNumber} {email || website ? " | " : ""}
              </>
            )}
            {email && (
              <>
                {email} {website ? " | " : ""}
              </>
            )}
            {website}
          </p>
          <br />
        </>
      )}
    </>
  );
};

export default PersonalInfo;
