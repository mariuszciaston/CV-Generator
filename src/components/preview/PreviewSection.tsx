import { forwardRef } from "react";
import { DataProps } from "../types";

import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

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
      experience,
      education,
    },
    ref,
  ) => {
    return (
      <section
        id="preview-section"
        className="min-w-[256px] flex-1 lg:max-w-none"
      >
        <div
          id="page"
          ref={ref}
          className="flex aspect-[210/297] flex-col break-words border bg-white p-[calc(100%/21*2)] shadow-lg"
        >
          <PersonalInfo
            fullName={fullName}
            jobTitle={jobTitle}
            address={address}
            email={email}
            phoneNumber={phoneNumber}
            website={website}
          />

          <Summary summary={summary} />

          <Experience experience={experience} />

          <Education education={education} />

          <Skills skills={skills} />
        </div>
      </section>
    );
  },
);

export default PreviewSection;
