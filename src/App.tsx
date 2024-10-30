import {
  User,
  FilePen,
  PencilRuler,
  Briefcase,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

function App() {
  return (
    <>
      <main className="flex max-w-[1180px] flex-wrap items-center gap-8 p-8 lg:w-[calc(100vw-2rem)] lg:flex-row lg:items-start">
        <section
          id="input-section"
          className="flex w-full min-w-[256px] max-w-[768px] flex-col gap-4 lg:w-[320px]"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="flex-1 text-nowrap rounded-md bg-blue-400 p-2 text-sm font-medium text-white"
              >
                Load Example
              </button>
              <button
                type="button"
                className="flex-1 text-nowrap rounded-md bg-red-500 p-2 text-sm font-medium text-white"
              >
                Clear Resume
              </button>
            </div>

            <div id="inputs" className="flex flex-col flex-wrap gap-4">
              <div className="flex items-center justify-between rounded-md border bg-white p-4 text-xl font-medium shadow">
                <div className="flex items-center gap-2">
                  <User />
                  <div className="">Personal Information</div>
                </div>

                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-gray-100"
                >
                  <ChevronDown className="size-4" />
                </button>
              </div>

              <div className="flex items-center justify-between rounded-md border bg-white p-4 text-xl font-medium shadow">
                <div className="flex items-center gap-2">
                  <FilePen />
                  <div className="">Summary</div>
                </div>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-gray-100"
                >
                  <ChevronDown className="size-4" />
                </button>
              </div>

              <div className="flex items-center justify-between rounded-md border bg-white p-4 text-xl font-medium shadow">
                <div className="flex items-center gap-2">
                  <PencilRuler />
                  <div className="">Skills</div>
                </div>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-gray-100"
                >
                  <ChevronDown className="size-4" />
                </button>
              </div>

              <div className="flex items-center justify-between rounded-md border bg-white p-4 text-xl font-medium shadow">
                <div className="flex items-center gap-2">
                  <Briefcase />
                  <div className="">Experience</div>
                </div>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-gray-100"
                >
                  <ChevronDown className="size-4" />
                </button>
              </div>

              <div className="flex items-center justify-between rounded-md border bg-white p-4 text-xl font-medium shadow">
                <div className="flex items-center gap-2">
                  <GraduationCap />
                  <div className="">Education</div>
                </div>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-gray-100"
                >
                  <ChevronDown className="size-4" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full text-nowrap rounded-md bg-green-500 p-2 text-sm font-medium text-white"
          >
            Save as PDF
          </button>
        </section>

        <section
          id="preview-section"
          className="min-w-[256px] max-w-[768px] flex-1 lg:max-w-none"
        >
          <div
            id="page"
            className="aspect-[210/297] border bg-white shadow-lg"
          ></div>
        </section>
      </main>

      <footer className="flex items-center justify-end px-8 pb-8 text-sm">
        Mariusz Ciastoń 2024 &nbsp;
        <a
          href="https://github.com/mariuszciaston/"
          target="_blank"
          rel="noopener"
        >
          <i
            className="fab fa-github fa-2x opacity-75 transition-transform duration-500 ease-in-out hover:rotate-1turn hover:scale-125 hover:transform hover:opacity-100"
            aria-hidden="true"
          ></i>
        </a>
      </footer>
    </>
  );
}

export default App;
