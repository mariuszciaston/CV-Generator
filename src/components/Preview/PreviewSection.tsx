const PreviewSection = () => {
  return (
    <section
      id="preview-section"
      className="min-w-[256px] max-w-[768px] flex-1 lg:max-w-none"
    >
      <div
        id="page"
        className="aspect-[210/297] border bg-white shadow-lg"
      ></div>
    </section>
  );
};

export default PreviewSection;
