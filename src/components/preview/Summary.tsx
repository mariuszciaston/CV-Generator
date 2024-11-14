import { DataProps } from "../types";

const Summary: React.FC<Pick<DataProps, "summary">> = ({ summary }) => {
  return (
    <>
      {summary && (
        <>
          <h2 className="font-medium text-blue-500">SUMMARY</h2>
          <p>{summary}</p>
          <br />
        </>
      )}
    </>
  );
};

export default Summary;
