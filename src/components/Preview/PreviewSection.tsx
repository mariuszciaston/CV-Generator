import { Data } from "../types";

const PreviewSection: React.FC<Data> = ({
  fullName,
  jobTitle,
  address,
  email,
  phoneNumber,
  website,
  summary,
}) => {
  return (
    <section
      id="preview-section"
      className="min-w-[256px] max-w-[768px] flex-1 lg:max-w-none"
    >
      <div
        id="page"
        className="aspect-[210/297] break-words border bg-white p-[calc(100%/21*1.5)] shadow-lg"
      >
        <h1 className="font-bold">Personal Information</h1>
        <p className="border">Full Name: {fullName}</p>
        <p className="border">Job Title: {jobTitle}</p>
        <p className="border">Address: {address}</p>
        <p className="border">Email: {email}</p>
        <p className="border">Phone Number: {phoneNumber}</p>
        <p className="border">Website: {website}</p>

        <h1 className="font-bold">Summary</h1>
        <p className="border">Summary: {summary}</p>

        {/* <h1 className="font-bold">Experience</h1>
      
        <h1 className="font-bold">Education</h1>

        <h1 className="font-bold">Skills</h1>
        <p className="border">Skills: {skills}</p> */}
      </div>
    </section>
  );
};

export default PreviewSection;
