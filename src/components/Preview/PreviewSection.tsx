import { forwardRef } from "react";
import { DataProps } from "../types";
const PreviewSection = forwardRef<HTMLDivElement, DataProps>(
  (
    {
      fullName,
      jobTitle,
      address,
      email,
      phoneNumber,
      website,
      summary,
      skills,
    },
    ref,
  ) => {
    return (
      <section
        id="preview-section"
        className="min-w-[256px] max-w-[768px] flex-1 lg:max-w-none"
      >
        <div
          id="page"
          ref={ref}
          className="flex aspect-[210/297] flex-col break-words border bg-white p-[calc(100%/21)] shadow-lg"
        >
          <p className="text-4xl font-medium text-blue-500">{fullName}</p>
          <p className="text-3xl font-light">{jobTitle}</p>

          <br />

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

          {summary && (
            <>
              <h2 className="font-medium text-blue-500">SUMMARY</h2>
              <p>{summary}</p>
              <br />
            </>
          )}

          {/* <h2 className="font-medium text-blue-500">EXPERIENCE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <br />

        <h2 className="font-medium text-blue-500">EDUCATION</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <br /> */}

          {skills && (
            <>
              <h2 className="font-medium text-blue-500">SKILLS</h2>
              <p>{skills}</p>
            </>
          )}
        </div>
      </section>
    );
  },
);

export default PreviewSection;
