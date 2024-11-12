import { DataProps } from "../types";

const PreviewSection: React.FC<DataProps> = ({
  fullName,
  jobTitle,
  address,
  email,
  phoneNumber,
  website,
  summary,
  skills,
}) => {
  return (
    <section
      id="preview-section"
      className="min-w-[256px] max-w-[768px] flex-1 lg:max-w-none"
    >
      <div
        id="page"
        className="flex aspect-[210/297] flex-col gap-4 break-words border bg-white p-[calc(100%/21*1.5)] shadow-lg"
      >
        <h1 className="font-bold">Personal Information</h1>
        <hr className="border-t-2 border-black" />
        <p className="border">{fullName}</p>
        <p className="border">{jobTitle}</p>
        <p className="border">{address}</p>
        <p className="border">{email}</p>
        <p className="border">{phoneNumber}</p>
        <p className="border">{website}</p>
        <h1 className="font-bold">Summary</h1>
        <hr className="border-t-2 border-black" />
        <p className="border">{summary}</p>
        <h1 className="font-bold">Experience</h1>
        <hr className="border-t-2 border-black" />
        Tutaj doświadczenie ...
        <h1 className="font-bold">Education</h1>
        <hr className="border-t-2 border-black" />
        Tutaj edukacja ...
        <h1 className="font-bold">Skills</h1>
        <hr className="border-t-2 border-black" />
        <p className="border">{skills}</p>
      </div>
    </section>
  );
};

export default PreviewSection;
