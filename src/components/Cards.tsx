import {
  User,
  FilePen,
  PencilRuler,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Cards = () => {
  return (
    <div id="Cards" className="flex flex-col flex-wrap gap-4">
      <div className="flex flex-col gap-4 rounded-md border bg-white p-4 shadow">
        <div className="flex items-center justify-between text-xl font-medium">
          <div className="flex items-center gap-2">
            <User />
            <div className="">Personal Information</div>
          </div>

          <button type="button" className="rounded-md p-2 hover:bg-gray-100">
            <ChevronDown className="size-4" />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="rounded-md border px-3 py-2"
            placeholder="Enter your full name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="jobTitle">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            className="rounded-md border px-3 py-2"
            placeholder="Enter your job title"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="rounded-md border px-3 py-2"
            placeholder="Enter your address"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="rounded-md border px-3 py-2"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            className="rounded-md border px-3 py-2"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="website">
            Website
          </label>
          <input
            type="url"
            name="website"
            id="website"
            className="rounded-md border px-3 py-2"
            placeholder="Enter your website URL"
          />
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md border bg-white p-4 text-xl font-medium shadow">
        <div className="flex items-center gap-2">
          <User />
          <div className="">Personal Information</div>
        </div>

        <button type="button" className="rounded-md p-2 hover:bg-gray-100">
          <ChevronDown className="size-4" />
        </button>
      </div>

      <div className="flex items-center justify-between rounded-md border bg-white p-4 text-xl font-medium shadow">
        <div className="flex items-center gap-2">
          <FilePen />
          <div className="">Summary</div>
        </div>
        <button type="button" className="rounded-md p-2 hover:bg-gray-100">
          <ChevronDown className="size-4" />
        </button>
      </div>

      <div className="flex items-center justify-between rounded-md border bg-white p-4 text-xl font-medium shadow">
        <div className="flex items-center gap-2">
          <PencilRuler />
          <div className="">Skills</div>
        </div>
        <button type="button" className="rounded-md p-2 hover:bg-gray-100">
          <ChevronDown className="size-4" />
        </button>
      </div>

      <div className="flex items-center justify-between rounded-md border bg-white p-4 text-xl font-medium shadow">
        <div className="flex items-center gap-2">
          <Briefcase />
          <div className="">Experience</div>
        </div>
        <button type="button" className="rounded-md p-2 hover:bg-gray-100">
          <ChevronDown className="size-4" />
        </button>
      </div>

      <div className="flex items-center justify-between rounded-md border bg-white p-4 text-xl font-medium shadow">
        <div className="flex items-center gap-2">
          <GraduationCap />
          <div className="">Education</div>
        </div>
        <button type="button" className="rounded-md p-2 hover:bg-gray-100">
          <ChevronDown className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default Cards;
