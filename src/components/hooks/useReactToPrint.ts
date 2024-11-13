import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const usePrint = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return { contentRef, reactToPrintFn };
};

export default usePrint;
