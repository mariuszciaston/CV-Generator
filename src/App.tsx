import Header from "./components/Header";
import InputSection from "./components/InputSection";
import PreviewSection from "./components/PreviewSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="flex max-w-[1180px] flex-wrap items-center gap-8 p-8 lg:w-[calc(100vw-2rem)] lg:flex-row lg:items-start">
        <InputSection />
        <PreviewSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
